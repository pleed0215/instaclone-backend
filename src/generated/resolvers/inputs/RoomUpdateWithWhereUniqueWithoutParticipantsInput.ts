import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoomUpdateWithoutParticipantsInput } from "../inputs/RoomUpdateWithoutParticipantsInput";
import { RoomWhereUniqueInput } from "../inputs/RoomWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoomUpdateWithWhereUniqueWithoutParticipantsInput {
  @TypeGraphQL.Field(_type => RoomWhereUniqueInput, {
    nullable: false
  })
  where!: RoomWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoomUpdateWithoutParticipantsInput, {
    nullable: false
  })
  data!: RoomUpdateWithoutParticipantsInput;
}
