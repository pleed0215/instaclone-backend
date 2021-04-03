import { GraphQLUpload } from "graphql-tools";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import {
  CommonOutput,
  CommonPaginatedInput,
  CommonPaginatedOutput,
} from "./common.dto";
import { FileUpload } from "./file.upload";
import { Photo, User, HashTag } from "../generated";

@InputType()
export class UploadPhotoInput {
  @Field((type) => GraphQLUpload)
  file: FileUpload;

  @Field((type) => String, { nullable: true })
  caption?: string;
}

@ObjectType()
export class UploadPhotoOutput extends CommonOutput {
  @Field((type) => Photo, { nullable: true })
  photo?: Photo;
}

@InputType()
export class SeePhotoDetailInput {
  @Field((type) => Int)
  id: number;
}

@ObjectType()
export class SeePhotoDetailOutput extends CommonOutput {
  @Field((type) => Photo, { nullable: true })
  photo?: Photo;
}

@InputType()
export class SeeHashTagInput {
  @Field((type) => String)
  hashtag: string;
}

@InputType()
export class SeeHashTagPhotoInput {
  @Field((type) => String)
  hashtag: string;

  @Field((type) => Int, { nullable: true, defaultValue: 0 })
  offset?: number;

  @Field((type) => Int, { nullable: true, defaultValue: 10 })
  limit?: number;
}

@ObjectType()
export class SeeHashTagPhotoOutput {
  @Field((type) => [Photo], { nullable: true })
  photos?: Photo[];

  @Field((type) => Int, { nullable: true })
  totalCount?: number;
}

@InputType()
export class SearchPhotoInput {
  @Field((type) => String)
  keyword: string;

  @Field((type) => Int, { nullable: true, defaultValue: 0 })
  offset?: number;

  @Field((type) => Int, { nullable: true, defaultValue: 10 })
  limit?: number;
}

@ObjectType()
export class SearchPhotoOutput {
  @Field((type) => [Photo], { nullable: true })
  photos?: Photo[];

  @Field((type) => Int, { nullable: true })
  totalCount?: number;
}

@InputType()
export class UpdatePhotoInput {
  @Field((type) => Int)
  id: number;

  @Field((type) => GraphQLUpload, { nullable: true })
  file?: FileUpload;

  @Field((type) => String, { nullable: true })
  caption?: string;
}

@ObjectType()
export class UpdatePhotoOutput extends CommonOutput {}

@InputType()
export class ToggleLikeInput {
  @Field((type) => Int)
  id: number;
}

@ObjectType()
export class ToggleLikeOutput extends CommonOutput {
  @Field((type) => String, { nullable: true })
  message?: string;
}

@InputType()
export class SeeLikeUsersInput extends CommonPaginatedInput {
  @Field((type) => Int)
  photoId: number;
}

@ObjectType()
export class SeeLikeUsersOutput extends CommonPaginatedOutput {
  @Field((type) => [User], { nullable: true })
  likeUsers?: User[];
}

@InputType()
export class SeeLikePhotosInput extends CommonPaginatedInput {
  @Field((type) => Int)
  userId: number;
}

@ObjectType()
export class SeeLikePhotosOutput extends CommonPaginatedOutput {
  @Field((type) => [Photo], { nullable: true })
  likePhotos?: Photo[];
}

@InputType()
export class SeeFeedsInput {
  @Field((type) => Int, { nullable: true, defaultValue: 0 })
  offset?: number;
  @Field((type) => Int, { nullable: true, defaultValue: 10 })
  limit?: number;
}

@InputType()
export class DeletePhotoInput {
  @Field((type) => Int)
  id: number;
}

@ObjectType()
export class DeletePhotoOutput extends CommonOutput {}
