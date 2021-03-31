import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateOrConnectWithoutRoomInput } from "../inputs/MessageCreateOrConnectWithoutRoomInput";
import { MessageCreateWithoutRoomInput } from "../inputs/MessageCreateWithoutRoomInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutRoomInput } from "../inputs/MessageUpdateManyWithWhereWithoutRoomInput";
import { MessageUpdateWithWhereUniqueWithoutRoomInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutRoomInput";
import { MessageUpsertWithWhereUniqueWithoutRoomInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutRoomInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageUpdateManyWithoutRoomInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutRoomInput], {
    nullable: true
  })
  create?: MessageCreateWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutRoomInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpsertWithWhereUniqueWithoutRoomInput], {
    nullable: true
  })
  upsert?: MessageUpsertWithWhereUniqueWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  set?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  delete?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateWithWhereUniqueWithoutRoomInput], {
    nullable: true
  })
  update?: MessageUpdateWithWhereUniqueWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutRoomInput], {
    nullable: true
  })
  updateMany?: MessageUpdateManyWithWhereWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
