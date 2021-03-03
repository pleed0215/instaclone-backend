import {
  Arg,
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
  SearchPhotoInput,
  SearchPhotoOutput,
  SeeFeedsInput,
  SeeFeedsOutput,
  SeeHashTagInput,
  SeeHashTagOutput,
  SeeHashTagPhotoOutput,
  SeeLikePhotosInput,
  SeeLikePhotosOutput,
  SeeLikeUsersInput,
  SeeLikeUsersOutput,
  SeePhotoDetailInput,
  SeePhotoDetailOutput,
  ToggleLikeInput,
  ToggleLikeOutput,
  UpdatePhotoInput,
  UpdatePhotoOutput,
  UploadPhotoInput,
  UploadPhotoOutput,
} from "../../dtos/photo.dto";
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

  @Query((returns) => SearchPhotoOutput)
  searchPhotos(
    @Arg("input") input: SearchPhotoInput
  ): Promise<SearchPhotoOutput> {
    return this.photoService.searchPhotos(input);
  }

  @Mutation((returns) => UpdatePhotoOutput)
  // due to prisma generated... changed uploadPhoto to editPhoto.. not to use deuplicated name.
  editPhoto(
    @AuthUser() authUser,
    @Arg("input") input: UpdatePhotoInput
  ): Promise<UpdatePhotoOutput> {
    return this.photoService.updatePhoto(authUser, input);
  }

  @Mutation((returns) => ToggleLikeOutput)
  @Authorized()
  toggleLike(
    @AuthUser() authUser,
    @Arg("input") input: ToggleLikeInput
  ): Promise<ToggleLikeOutput> {
    return this.photoService.toggleLike(authUser, input);
  }

  @FieldResolver((returns) => Int)
  numLikes(@Root() photo: Photo): Promise<number> {
    return this.photoService.numLikes(photo.id);
  }

  @Query((returns) => SeeLikeUsersOutput)
  seeLikeUsers(
    @Arg("input") input: SeeLikeUsersInput
  ): Promise<SeeLikeUsersOutput> {
    return this.photoService.seeLikeUsers(input);
  }

  @Query((returns) => SeeLikePhotosOutput)
  seeLikePhotos(
    @Arg("input") input: SeeLikePhotosInput
  ): Promise<SeeLikePhotosOutput> {
    return this.photoService.seeLikePhotos(input);
  }

  @Query((returns) => SeeFeedsOutput)
  @Authorized()
  seeFeeds(
    @AuthUser() authUser,
    @Arg("input") input: SeeFeedsInput
  ): Promise<SeeFeedsOutput> {
    return this.photoService.seeFeeds(authUser, input);
  }

  @FieldResolver((returns) => Int)
  numComments(@Root() photo: Photo): Promise<number> {
    return this.photoService.numComments(photo.id);
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
