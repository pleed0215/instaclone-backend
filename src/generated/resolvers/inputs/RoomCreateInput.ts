import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateNestedManyWithoutRoomInput } from "../inputs/MessageCreateNestedManyWithoutRoomInput";
import { UserCreateNestedManyWithoutRoomsInput } from "../inputs/UserCreateNestedManyWithoutRoomsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoomCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRoomsInput, {
    nullable: true
  })
  participants?: UserCreateNestedManyWithoutRoomsInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutRoomInput, {
    nullable: true
  })
  messages?: MessageCreateNestedManyWithoutRoomInput | undefined;
}
