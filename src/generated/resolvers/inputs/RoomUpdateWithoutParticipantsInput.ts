import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutRoomInput } from "../inputs/MessageUpdateManyWithoutRoomInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoomUpdateWithoutParticipantsInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutRoomInput, {
    nullable: true
  })
  messages?: MessageUpdateManyWithoutRoomInput | undefined;
}
