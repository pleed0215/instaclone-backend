import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageUpdateWithoutRoomInput } from "../inputs/MessageUpdateWithoutRoomInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageUpdateWithWhereUniqueWithoutRoomInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutRoomInput, {
    nullable: false
  })
  data!: MessageUpdateWithoutRoomInput;
}
