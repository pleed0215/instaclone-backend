import { GraphQLUpload } from "graphql-tools";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import {
  CommonOutput,
  CommonPaginatedInput,
  CommonPaginatedOutput,
} from "../common.dto";
import { FileUpload } from "../file.upload";
import { Photo, User, HashTag } from "@generated/type-graphql";

@InputType()
export class UploadPhotoInput {
  @Field((type) => GraphQLUpload)
  file: FileUpload;

  @Field((type) => String, { nullable: true })
  caption?: string;
}

@ObjectType()
export class UploadPhotoOutput extends CommonOutput {}

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

@ObjectType()
export class SeeHashTagOutput extends CommonOutput {
  @Field((type) => HashTag, { nullable: true })
  hashtag?: HashTag;
}

@ObjectType()
export class SeeHashTagPhotoOutput {
  @Field((type) => Int, { nullable: true })
  currentPage?: number;
  @Field((type) => Int, { nullable: true })
  currentCount?: number;

  @Field((type) => Int, { nullable: true })
  totalPage?: number;
  @Field((type) => Int, { nullable: true })
  totalCount?: number;

  @Field((type) => Int, { nullable: true })
  pageSize?: number;
  @Field((type) => [Photo], { nullable: true })
  photos?: Photo[];
}

@InputType()
export class SearchPhotoInput extends CommonPaginatedInput {
  @Field((type) => String)
  keyword: string;
}

@ObjectType()
export class SearchPhotoOutput extends CommonPaginatedOutput {
  @Field((type) => [Photo])
  photos?: Photo[];
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
