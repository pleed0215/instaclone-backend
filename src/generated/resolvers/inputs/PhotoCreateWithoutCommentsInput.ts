import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashTagCreateNestedManyWithoutPhotosInput } from "../inputs/HashTagCreateNestedManyWithoutPhotosInput";
import { LikeCreateNestedManyWithoutPhotoInput } from "../inputs/LikeCreateNestedManyWithoutPhotoInput";
import { UserCreateNestedOneWithoutPhotosInput } from "../inputs/UserCreateNestedOneWithoutPhotosInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoCreateWithoutCommentsInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPhotosInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutPhotosInput;

  @TypeGraphQL.Field(_type => HashTagCreateNestedManyWithoutPhotosInput, {
    nullable: true
  })
  hashtags?: HashTagCreateNestedManyWithoutPhotosInput | undefined;

  @TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutPhotoInput, {
    nullable: true
  })
  likes?: LikeCreateNestedManyWithoutPhotoInput | undefined;
}
