import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRoomsInput } from "../inputs/UserCreateOrConnectWithoutRoomsInput";
import { UserCreateWithoutRoomsInput } from "../inputs/UserCreateWithoutRoomsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutRoomsInput } from "../inputs/UserUpdateManyWithWhereWithoutRoomsInput";
import { UserUpdateWithWhereUniqueWithoutRoomsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutRoomsInput";
import { UserUpsertWithWhereUniqueWithoutRoomsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutRoomsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutRoomsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutRoomsInput], {
    nullable: true
  })
  create?: UserCreateWithoutRoomsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRoomsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRoomsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutRoomsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutRoomsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutRoomsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutRoomsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutRoomsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutRoomsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
