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
import { User, Photo, HashTag } from "../../generated";
import { PhotoService } from "./photo.service";
import {
  DeletePhotoInput,
  DeletePhotoOutput,
  SearchPhotoInput,
  SearchPhotoOutput,
  SeeFeedsInput,
  SeeHashTagInput,
  SeeHashTagPhotoInput,
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

  @Query((returns) => [Photo])
  searchPhotos(@Arg("input") input: SearchPhotoInput): Promise<Photo[]> {
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

  @Query((returns) => [Photo])
  @Authorized()
  seeFeeds(
    @AuthUser() authUser,
    @Arg("input") input: SeeFeedsInput
  ): Promise<Photo[]> {
    return this.photoService.seeFeeds(authUser, input);
  }

  @FieldResolver((returns) => Int)
  numComments(@Root() photo: Photo): Promise<number> {
    return this.photoService.numComments(photo.id);
  }

  @FieldResolver((type) => Boolean)
  @Authorized()
  isMine(@AuthUser() authUser: User, @Root() { userId }: Photo) {
    return authUser.id === userId;
  }

  @Mutation((returns) => DeletePhotoOutput)
  @Authorized()
  removePhoto(
    @AuthUser() authUser: User,
    @Arg("input") input: DeletePhotoInput
  ): Promise<DeletePhotoOutput> {
    return this.photoService.deletePhoto(authUser, input);
  }

  @FieldResolver((returns) => Boolean)
  @Authorized()
  isLiked(@Root() photo: Photo, @AuthUser() authUser: User): Promise<boolean> {
    return this.photoService.isLiked(photo.id, authUser.id);
  }
}

@Resolver((of) => HashTag)
export class HashTagResolvers {
  constructor(private readonly photoService: PhotoService) {
    this.photoService = new PhotoService();
  }
  @Query((types) => [HashTag])
  searchHashtags(@Arg("input") input: SeeHashTagInput): Promise<HashTag[]> {
    return this.photoService.searchHashTags(input);
  }

  @Query((types) => SeeHashTagPhotoOutput)
  seeHashtagPhotos(
    @Arg("input") input: SeeHashTagPhotoInput
  ): Promise<SeeHashTagPhotoOutput> {
    return this.photoService.photos(input);
  }

  @FieldResolver((types) => Int)
  numPhotos(@Root() hashtag): Promise<number> {
    return this.photoService.totalPhotos(hashtag);
  }
}
