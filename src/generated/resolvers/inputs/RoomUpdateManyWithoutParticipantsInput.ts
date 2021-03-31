import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoomCreateOrConnectWithoutParticipantsInput } from "../inputs/RoomCreateOrConnectWithoutParticipantsInput";
import { RoomCreateWithoutParticipantsInput } from "../inputs/RoomCreateWithoutParticipantsInput";
import { RoomScalarWhereInput } from "../inputs/RoomScalarWhereInput";
import { RoomUpdateManyWithWhereWithoutParticipantsInput } from "../inputs/RoomUpdateManyWithWhereWithoutParticipantsInput";
import { RoomUpdateWithWhereUniqueWithoutParticipantsInput } from "../inputs/RoomUpdateWithWhereUniqueWithoutParticipantsInput";
import { RoomUpsertWithWhereUniqueWithoutParticipantsInput } from "../inputs/RoomUpsertWithWhereUniqueWithoutParticipantsInput";
import { RoomWhereUniqueInput } from "../inputs/RoomWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoomUpdateManyWithoutParticipantsInput {
  @TypeGraphQL.Field(_type => [RoomCreateWithoutParticipantsInput], {
    nullable: true
  })
  create?: RoomCreateWithoutParticipantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoomCreateOrConnectWithoutParticipantsInput], {
    nullable: true
  })
  connectOrCreate?: RoomCreateOrConnectWithoutParticipantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoomUpsertWithWhereUniqueWithoutParticipantsInput], {
    nullable: true
  })
  upsert?: RoomUpsertWithWhereUniqueWithoutParticipantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoomWhereUniqueInput], {
    nullable: true
  })
  connect?: RoomWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoomWhereUniqueInput], {
    nullable: true
  })
  set?: RoomWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoomWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RoomWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoomWhereUniqueInput], {
    nullable: true
  })
  delete?: RoomWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoomUpdateWithWhereUniqueWithoutParticipantsInput], {
    nullable: true
  })
  update?: RoomUpdateWithWhereUniqueWithoutParticipantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoomUpdateManyWithWhereWithoutParticipantsInput], {
    nullable: true
  })
  updateMany?: RoomUpdateManyWithWhereWithoutParticipantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoomScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RoomScalarWhereInput[] | undefined;
}
