import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateOrConnectWithoutRoomInput } from "../inputs/MessageCreateOrConnectWithoutRoomInput";
import { MessageCreateWithoutRoomInput } from "../inputs/MessageCreateWithoutRoomInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateNestedManyWithoutRoomInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutRoomInput], {
    nullable: true
  })
  create?: MessageCreateWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutRoomInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
