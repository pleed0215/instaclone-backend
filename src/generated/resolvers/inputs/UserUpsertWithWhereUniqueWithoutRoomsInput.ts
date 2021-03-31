import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRoomsInput } from "../inputs/UserCreateWithoutRoomsInput";
import { UserUpdateWithoutRoomsInput } from "../inputs/UserUpdateWithoutRoomsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutRoomsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRoomsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRoomsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRoomsInput, {
    nullable: false
  })
  create!: UserCreateWithoutRoomsInput;
}
