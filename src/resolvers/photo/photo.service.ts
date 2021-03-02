import { removeFile, uploadFile } from "../../aws/s3";
import {
  SearchPhotoInput,
  SearchPhotoOutput,
  SeeHashTagInput,
  SeeHashTagOutput,
  SeeHashTagPhotoOutput,
  SeePhotoDetailInput,
  SeePhotoDetailOutput,
  ToggleLikeInput,
  ToggleLikeOutput,
  UpdatePhotoInput,
  UpdatePhotoOutput,
  UploadPhotoInput,
  UploadPhotoOutput,
} from "../../dtos/photo/photo.dto";
import { prismaClient } from "../../prisma";
import { User, HashTag } from "@generated/type-graphql";

export class PhotoService {
  parseHashTag(toParse: string): string[] {
    const hashTagRegex = /#[\w]+/gi;
    const results: string[] = [];
    const replaceFunction = (match: string) => {
      results.push(match.trim().toLowerCase());
      return match;
    };
    toParse.replace(hashTagRegex, replaceFunction);
    return results;
  }
  async uploadPhoto(
    authUser: User,
    { file, caption }: UploadPhotoInput
  ): Promise<UploadPhotoOutput> {
    try {
      const uploadResult = await uploadFile(await file);
      let hashtags: string[] = [];
      if (caption) {
        hashtags = [...this.parseHashTag(caption)];
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
        },
      });
      if (photo) {
        console.log(photo);
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

  async seeHashTag({
    hashtag: hashtagInput,
  }: SeeHashTagInput): Promise<SeeHashTagOutput> {
    try {
      const hashtag = await prismaClient.hashTag.findUnique({
        where: { hashtag: hashtagInput },
      });
      if (hashtag) {
        return {
          ok: true,

          hashtag,
        };
      } else {
        throw new Error(`There is no hash tag contains: ${hashtagInput}`);
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
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

  async photos(
    hashtag: HashTag,
    page,
    pageSize
  ): Promise<SeeHashTagPhotoOutput> {
    try {
      const totalCount = await this.totalPhotos(hashtag);
      const totalPage = Math.ceil(totalCount / pageSize);
      const photos = await prismaClient.photo.findMany({
        where: {
          hashtags: {
            some: {
              id: hashtag.id,
            },
          },
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      });
      const currentCount = photos.length;
      const currentPage = page;

      return {
        totalCount,
        totalPage,
        currentPage,
        currentCount,
        pageSize,
        photos,
      };
    } catch {
      throw new Error("Fetching hashtag photo error.");
    }
  }

  async searchPhotos({
    keyword,
    page,
    pageSize,
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
      const totalPage = Math.ceil(totalCount / pageSize);
      const photos = await prismaClient.photo.findMany({
        where: {
          caption: {
            contains: keyword,
            mode: "insensitive",
          },
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      });
      const currentCount = photos.length;
      const currentPage = page;

      return {
        ok: true,
        totalPage,
        totalCount,
        currentCount,
        currentPage,
        pageSize,
        photos,
      };
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
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
          hashtags = [...this.parseHashTag(caption)];
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
}
