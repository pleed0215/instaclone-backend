import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoomCreateWithoutParticipantsInput } from "../inputs/RoomCreateWithoutParticipantsInput";
import { RoomWhereUniqueInput } from "../inputs/RoomWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoomCreateOrConnectWithoutParticipantsInput {
  @TypeGraphQL.Field(_type => RoomWhereUniqueInput, {
    nullable: false
  })
  where!: RoomWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoomCreateWithoutParticipantsInput, {
    nullable: false
  })
  create!: RoomCreateWithoutParticipantsInput;
}
