import { uploadFile } from "../../aws/s3";
import {
  SeeHashTagInput,
  SeeHashTagOutput,
  SeeHashTagPhotoOutput,
  SeePhotoDetailInput,
  SeePhotoDetailOutput,
  UploadPhotoInput,
  UploadPhotoOutput,
} from "../../dtos/photo/photo.dto";
import { prismaClient } from "../../prisma";
import {
  User,
  HashTag,
  HashTagCreateOrConnectWithoutPhotosInput,
} from "@generated/type-graphql";

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
      //const uploadResult = { ok: false, error: "jajaja", url: "jaja" };
      let connectOrCreateInput: Array<HashTagCreateOrConnectWithoutPhotosInput> = [];
      let hashtags: string[] = [];
      if (caption) {
        hashtags = this.parseHashTag(caption);
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
}
