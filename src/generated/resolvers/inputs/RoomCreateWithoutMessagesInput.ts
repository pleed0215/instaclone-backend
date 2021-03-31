import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutRoomsInput } from "../inputs/UserCreateNestedManyWithoutRoomsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoomCreateWithoutMessagesInput {
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
}
