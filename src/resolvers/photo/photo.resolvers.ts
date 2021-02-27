import {
  Arg,
  ArgsType,
  Authorized,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Photo, HashTag } from "@generated/type-graphql";
import { PhotoService } from "./photo.service";
import {
  SeeHashTagInput,
  SeeHashTagOutput,
  SeeHashTagPhotoOutput,
  SeePhotoDetailInput,
  SeePhotoDetailOutput,
  UploadPhotoInput,
  UploadPhotoOutput,
} from "../../dtos/photo/photo.dto";
import { AuthUser } from "../../auth/auth.decorator";

@Resolver((of) => Photo)
export class PhotoResolvers {
  constructor(private readonly photoService: PhotoService) {
    this.photoService = new PhotoService();
  }

  @Mutation((returns) => UploadPhotoOutput)
  @Authorized()
  uploadPhoto(
    @AuthUser() authUser,
    @Arg("input") input: UploadPhotoInput
  ): Promise<UploadPhotoOutput> {
    return this.photoService.uploadPhoto(authUser, input);
  }

  @Query((returns) => SeePhotoDetailOutput)
  seePhotoDetail(
    @Arg("input") input: SeePhotoDetailInput
  ): Promise<SeePhotoDetailOutput> {
    return this.photoService.seePhotoDetail(input);
  }
}

@Resolver((of) => HashTag)
export class HashTagResolvers {
  constructor(private readonly photoService: PhotoService) {
    this.photoService = new PhotoService();
  }
  @Query((types) => SeeHashTagOutput)
  seeHashtag(@Arg("input") input: SeeHashTagInput): Promise<SeeHashTagOutput> {
    return this.photoService.seeHashTag(input);
  }

  @FieldResolver((types) => SeeHashTagPhotoOutput)
  photosOn(
    @Root() hashtag,
    @Arg("page", (types) => Int) page = 1,
    @Arg("pageSize", (types) => Int) pageSize = 10
  ): Promise<SeeHashTagPhotoOutput> {
    return this.photoService.photos(hashtag, page, pageSize);
  }

  @FieldResolver((types) => Int)
  numPhotos(@Root() hashtag): Promise<number> {
    return this.photoService.totalPhotos(hashtag);
  }
}
