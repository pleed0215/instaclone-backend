import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPhotosInput } from "../inputs/UserCreateWithoutPhotosInput";
import { UserUpdateWithoutPhotosInput } from "../inputs/UserUpdateWithoutPhotosInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutPhotosInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPhotosInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPhotosInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPhotosInput, {
    nullable: false
  })
  create!: UserCreateWithoutPhotosInput;
}
