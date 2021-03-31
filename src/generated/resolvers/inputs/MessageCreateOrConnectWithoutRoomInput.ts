import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutRoomInput } from "../inputs/MessageCreateWithoutRoomInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateOrConnectWithoutRoomInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutRoomInput, {
    nullable: false
  })
  create!: MessageCreateWithoutRoomInput;
}
