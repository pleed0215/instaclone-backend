import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoomCreateOrConnectWithoutParticipantsInput } from "../inputs/RoomCreateOrConnectWithoutParticipantsInput";
import { RoomCreateWithoutParticipantsInput } from "../inputs/RoomCreateWithoutParticipantsInput";
import { RoomWhereUniqueInput } from "../inputs/RoomWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoomCreateNestedManyWithoutParticipantsInput {
  @TypeGraphQL.Field(_type => [RoomCreateWithoutParticipantsInput], {
    nullable: true
  })
  create?: RoomCreateWithoutParticipantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoomCreateOrConnectWithoutParticipantsInput], {
    nullable: true
  })
  connectOrCreate?: RoomCreateOrConnectWithoutParticipantsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoomWhereUniqueInput], {
    nullable: true
  })
  connect?: RoomWhereUniqueInput[] | undefined;
}
