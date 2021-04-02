import { removeFile, uploadFile } from "../../aws/s3";
import {
  SearchPhotoInput,
  SearchPhotoOutput,
  SeeHashTagInput,
  SeeHashTagPhotoOutput,
  SeeLikeUsersInput,
  SeeLikeUsersOutput,
  SeeLikePhotosInput,
  SeeLikePhotosOutput,
  SeePhotoDetailInput,
  SeePhotoDetailOutput,
  ToggleLikeInput,
  ToggleLikeOutput,
  UpdatePhotoInput,
  UpdatePhotoOutput,
  UploadPhotoInput,
  UploadPhotoOutput,
  SeeFeedsInput,
  SeeFeedsOutput,
  DeletePhotoInput,
  DeletePhotoOutput,
  SeeHashTagPhotoInput,
} from "../../dtos/photo.dto";
import { prismaClient } from "../../prisma";
import { User, HashTag } from "../../generated";
import { parseHashTag } from "../../utils";

export class PhotoService {
  async uploadPhoto(
    authUser: User,
    { file, caption }: UploadPhotoInput
  ): Promise<UploadPhotoOutput> {
    try {
      const uploadResult = await uploadFile(await file);
      let hashtags: string[] = [];
      if (caption) {
        hashtags = [...parseHashTag(caption)];
      }

      if (uploadResult.ok && uploadResult.url) {
        const photo = await prismaClient.photo.create({
          data: {
            file: uploadResult.url,
            caption,
            user: {
              connect: {
                id: authUser.id,
              },
            },
            hashtags: {
              connectOrCreate: hashtags.map((hashtag) => ({
                where: {
                  hashtag,
                },
                create: {
                  hashtag,
                },
              })),
            },
          },
        });
        if (photo) {
          return {
            ok: true,
            photo,
          };
        } else {
          throw new Error("Creating a Photo failed");
        }
      } else {
        throw new Error(uploadResult.error);
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async seePhotoDetail({
    id,
  }: SeePhotoDetailInput): Promise<SeePhotoDetailOutput> {
    try {
      const photo = await prismaClient.photo.findUnique({
        where: { id },
        include: {
          hashtags: true,
          user: true,
          likes: true,
        },
      });
      if (photo) {
        return {
          ok: true,
          photo,
        };
      } else {
        throw new Error("Cannot fetch photo.");
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async searchHashTags({
    hashtag: hashtagInput,
  }: SeeHashTagInput): Promise<HashTag[]> {
    try {
      const hashtags = await prismaClient.hashTag.findMany({
        where: {
          hashtag: {
            contains: hashtagInput,
            mode: "insensitive",
          },
        },
      });
      return hashtags;
    } catch (e) {
      throw new Error(e);
    }
  }

  async totalPhotos({ hashtag }: HashTag): Promise<number> {
    return await prismaClient.photo.count({
      where: {
        hashtags: {
          some: {
            hashtag,
          },
        },
      },
    });
  }

  async photos({
    hashtag,
    offset,
    limit,
  }: SeeHashTagPhotoInput): Promise<SeeHashTagPhotoOutput> {
    try {
      const totalCount = await prismaClient.photo.count({
        where: {
          hashtags: {
            some: {
              hashtag,
            },
          },
        },
      });

      const photos = await prismaClient.photo.findMany({
        where: {
          hashtags: {
            some: {
              hashtag,
            },
          },
        },
        skip: offset,
        take: limit,
      });

      return {
        totalCount,
        photos,
      };
    } catch {
      throw new Error("Fetching hashtag photo error.");
    }
  }

  async searchPhotos({
    keyword,
    offset,
    limit,
  }: SearchPhotoInput): Promise<SearchPhotoOutput> {
    try {
      const totalCount = await prismaClient.photo.count({
        where: {
          caption: {
            contains: keyword,
            mode: "insensitive",
          },
        },
      });

      const photos = await prismaClient.photo.findMany({
        where: {
          caption: {
            contains: keyword,
            mode: "insensitive",
          },
        },
        skip: offset,
        take: limit,
      });

      return {
        totalCount,
        photos,
      };
    } catch (e) {
      throw new Error(e);
    }
  }

  async updatePhoto(
    authUser: User,
    { id, file, caption }: UpdatePhotoInput
  ): Promise<UpdatePhotoOutput> {
    try {
      const willUpdate = await prismaClient.photo.findUnique({
        where: { id },
        include: { hashtags: { select: { hashtag: true } } },
      });
      if (willUpdate) {
        if (willUpdate.userId !== authUser.id) {
          throw new Error("You do not have permission to access this photo");
        }
        let url;
        let hashtags: string[] = [];
        if (file) {
          if (willUpdate.file !== null) {
            await removeFile(willUpdate.file);
          }
          const upload = await uploadFile(await file);
          if (upload.ok && upload.url) {
            url = upload.url;
          } else {
            throw new Error(upload.error);
          }
        }

        if (caption) {
          hashtags = [...parseHashTag(caption)];
        }

        await prismaClient.photo.update({
          where: { id },
          data: {
            ...(url && { file: url }),
            ...(caption && { caption }),
            hashtags: {
              disconnect: [...willUpdate.hashtags],
              connectOrCreate: [
                ...hashtags.map((hashtag) => ({
                  where: { hashtag },
                  create: { hashtag },
                })),
              ],
            },
          },
        });

        return {
          ok: true,
        };
      } else {
        throw new Error("No photo record matches that id.");
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async deletePhoto(
    authUser: User,
    { id }: DeletePhotoInput
  ): Promise<DeletePhotoOutput> {
    try {
      const photo = await prismaClient.photo.findUnique({
        where: { id },
      });

      if (photo) {
        if (photo.userId === authUser.id) {
          if (photo.file) {
            await removeFile(photo.file);
          }
          await prismaClient.photo.delete({ where: { id } });
          return {
            ok: true,
          };
        } else {
          throw new Error(
            `DeletePhoto Error: Photo id ${id}'s owner is not user id: ${authUser.id}`
          );
        }
      } else {
        throw new Error(`DeletePhoto Error: Photo id: ${id} is not found.`);
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async toggleLike(
    authUser: User,
    { id }: ToggleLikeInput
  ): Promise<ToggleLikeOutput> {
    try {
      const photo = await prismaClient.photo.findUnique({
        where: {
          id,
        },
      });
      if (photo) {
        const like = await prismaClient.like.findUnique({
          where: {
            photoId_userId: {
              photoId: id,
              userId: authUser.id,
            },
          },
        });

        if (like) {
          await prismaClient.like.delete({
            where: {
              id: like.id,
            },
          });
          return {
            ok: true,
            message: `Unliked photo id: ${id}.`,
          };
        } else {
          await prismaClient.like.create({
            data: {
              photo: {
                connect: {
                  id,
                },
              },
              user: {
                connect: {
                  id: authUser.id,
                },
              },
            },
          });
          return {
            ok: true,
            message: `Liked photo id: ${id}`,
          };
        }
      } else {
        throw new Error(`Photo id ${id} is not found`);
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async numLikes(photoId: number): Promise<number> {
    try {
      const count = await prismaClient.like.count({
        where: {
          photoId,
        },
      });

      return count;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async seeLikeUsers({
    photoId,
    page,
    pageSize,
  }: SeeLikeUsersInput): Promise<SeeLikeUsersOutput> {
    try {
      const totalCount = await prismaClient.user.count({
        where: {
          likes: {
            some: {
              photoId,
            },
          },
        },
      });

      const totalPage = Math.ceil(totalCount / pageSize);
      const likeUsers = await prismaClient.user.findMany({
        where: {
          likes: {
            some: {
              photoId,
            },
          },
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      });
      const currentCount = likeUsers.length;
      const currentPage = page;

      return {
        ok: true,
        totalCount,
        totalPage,
        currentCount,
        currentPage,
        pageSize,
        likeUsers,
      };
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async seeLikePhotos({
    userId,
    page,
    pageSize,
  }: SeeLikePhotosInput): Promise<SeeLikePhotosOutput> {
    try {
      const totalCount = await prismaClient.photo.count({
        where: {
          likes: {
            some: {
              userId,
            },
          },
        },
      });
      const totalPage = Math.ceil(totalCount / pageSize);
      const likePhotos = await prismaClient.photo.findMany({
        where: {
          likes: {
            some: {
              userId,
            },
          },
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      });
      const currentCount = likePhotos.length;
      const currentPage = page;

      return {
        ok: true,
        totalCount,
        totalPage,
        currentCount,
        currentPage,
        pageSize,
        likePhotos,
      };
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async seeFeeds(
    authUser: User,
    { page, pageSize }: SeeFeedsInput
  ): Promise<SeeFeedsOutput> {
    try {
      const totalCount = await prismaClient.photo.count({
        where: {
          OR: [
            {
              user: {
                following: {
                  some: {
                    id: authUser.id,
                  },
                },
              },
            },
            {
              userId: authUser.id,
            },
          ],
        },
      });
      const totalPage = Math.ceil(totalCount / pageSize);
      const feeds = await prismaClient.photo.findMany({
        where: {
          OR: [
            {
              user: {
                following: {
                  some: {
                    id: authUser.id,
                  },
                },
              },
            },
            {
              userId: authUser.id,
            },
          ],
        },
        include: {
          user: true,
          hashtags: true,
          likes: true,
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: {
          createdAt: "desc",
        },
      });
      const currentCount = feeds.length;
      const currentPage = page;
      return {
        ok: true,
        totalPage,
        totalCount,
        currentCount,
        currentPage,
        pageSize,
        feeds,
      };
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async numComments(photoId: number): Promise<number> {
    return await prismaClient.comment.count({
      where: {
        photoId,
      },
    });
  }

  async isLiked(photoId: number, userId: number): Promise<boolean> {
    return Boolean(
      await prismaClient.like.findFirst({
        where: {
          photoId,
          userId,
        },
      })
    );
  }
}
