import { Field, InputType, Int, ObjectType } from "type-graphql";
import {
  CommonOutput,
  CommonPaginatedInput,
  CommonPaginatedOutput,
} from "./common.dto";
import { Comment } from "../generated";

@InputType()
export class AddCommentInput {
  @Field((type) => Int)
  photoId: number;

  @Field((type) => String)
  payload: string;
}

@ObjectType()
export class AddCommentOutput extends CommonOutput {
  @Field((type) => Comment, { nullable: true })
  comment?: Comment;
}

@InputType()
export class EditCommentInput {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  payload: string;
}

@ObjectType()
export class EditCommentOutput extends CommonOutput {}

@InputType()
export class DeleteCommentInput {
  @Field((type) => Int)
  id: number;
}

@ObjectType()
export class DeleteCommentOutput extends CommonOutput {}

@InputType()
export class SeeCommentsInput extends CommonPaginatedInput {
  @Field((type) => Int)
  photoId: number;
}

@ObjectType()
export class SeeCommentsOutput extends CommonPaginatedOutput {
  @Field((type) => [Comment], { nullable: true })
  comments?: Comment[];
}
