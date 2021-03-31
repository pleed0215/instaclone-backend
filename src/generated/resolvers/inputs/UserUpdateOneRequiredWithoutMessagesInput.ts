import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMessagesInput } from "../inputs/UserCreateOrConnectWithoutMessagesInput";
import { UserCreateWithoutMessagesInput } from "../inputs/UserCreateWithoutMessagesInput";
import { UserUpdateWithoutMessagesInput } from "../inputs/UserUpdateWithoutMessagesInput";
import { UserUpsertWithoutMessagesInput } from "../inputs/UserUpsertWithoutMessagesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutMessagesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: UserCreateWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutMessagesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutMessagesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutMessagesInput | undefined;
}
