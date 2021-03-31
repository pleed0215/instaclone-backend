import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateNestedManyWithoutRoomInput } from "../inputs/MessageCreateNestedManyWithoutRoomInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoomCreateWithoutParticipantsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutRoomInput, {
    nullable: true
  })
  messages?: MessageCreateNestedManyWithoutRoomInput | undefined;
}
