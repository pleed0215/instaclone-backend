import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMessagesInput } from "../inputs/UserCreateWithoutMessagesInput";
import { UserUpdateWithoutMessagesInput } from "../inputs/UserUpdateWithoutMessagesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutMessagesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutMessagesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutMessagesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: UserCreateWithoutMessagesInput;
}
