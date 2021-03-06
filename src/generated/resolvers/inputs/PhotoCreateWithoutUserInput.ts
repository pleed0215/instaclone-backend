import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutPhotoInput } from "../inputs/CommentCreateNestedManyWithoutPhotoInput";
import { HashTagCreateNestedManyWithoutPhotosInput } from "../inputs/HashTagCreateNestedManyWithoutPhotosInput";
import { LikeCreateNestedManyWithoutPhotoInput } from "../inputs/LikeCreateNestedManyWithoutPhotoInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  file!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  caption?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => HashTagCreateNestedManyWithoutPhotosInput, {
    nullable: true
  })
  hashtags?: HashTagCreateNestedManyWithoutPhotosInput | undefined;

  @TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutPhotoInput, {
    nullable: true
  })
  likes?: LikeCreateNestedManyWithoutPhotoInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutPhotoInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutPhotoInput | undefined;
}
