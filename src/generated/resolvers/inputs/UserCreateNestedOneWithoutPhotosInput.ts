import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPhotosInput } from "../inputs/UserCreateOrConnectWithoutPhotosInput";
import { UserCreateWithoutPhotosInput } from "../inputs/UserCreateWithoutPhotosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutPhotosInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPhotosInput, {
    nullable: true
  })
  create?: UserCreateWithoutPhotosInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPhotosInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPhotosInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
