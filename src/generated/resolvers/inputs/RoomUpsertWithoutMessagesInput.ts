import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoomCreateWithoutMessagesInput } from "../inputs/RoomCreateWithoutMessagesInput";
import { RoomUpdateWithoutMessagesInput } from "../inputs/RoomUpdateWithoutMessagesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoomUpsertWithoutMessagesInput {
  @TypeGraphQL.Field(_type => RoomUpdateWithoutMessagesInput, {
    nullable: false
  })
  update!: RoomUpdateWithoutMessagesInput;

  @TypeGraphQL.Field(_type => RoomCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: RoomCreateWithoutMessagesInput;
}
