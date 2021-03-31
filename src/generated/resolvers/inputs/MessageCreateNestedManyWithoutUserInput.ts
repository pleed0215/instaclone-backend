import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateOrConnectWithoutUserInput } from "../inputs/MessageCreateOrConnectWithoutUserInput";
import { MessageCreateWithoutUserInput } from "../inputs/MessageCreateWithoutUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutUserInput], {
    nullable: true
  })
  create?: MessageCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
