import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoomCreateNestedOneWithoutMessagesInput } from "../inputs/RoomCreateNestedOneWithoutMessagesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  payload!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isRead?: boolean | undefined;

  @TypeGraphQL.Field(_type => RoomCreateNestedOneWithoutMessagesInput, {
    nullable: false
  })
  room!: RoomCreateNestedOneWithoutMessagesInput;
}
