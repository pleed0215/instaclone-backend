import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoomCreateWithoutMessagesInput } from "../inputs/RoomCreateWithoutMessagesInput";
import { RoomWhereUniqueInput } from "../inputs/RoomWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoomCreateOrConnectWithoutMessagesInput {
  @TypeGraphQL.Field(_type => RoomWhereUniqueInput, {
    nullable: false
  })
  where!: RoomWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoomCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: RoomCreateWithoutMessagesInput;
}
