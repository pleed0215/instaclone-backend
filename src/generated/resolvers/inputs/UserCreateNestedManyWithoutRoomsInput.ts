import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRoomsInput } from "../inputs/UserCreateOrConnectWithoutRoomsInput";
import { UserCreateWithoutRoomsInput } from "../inputs/UserCreateWithoutRoomsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedManyWithoutRoomsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutRoomsInput], {
    nullable: true
  })
  create?: UserCreateWithoutRoomsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRoomsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRoomsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
