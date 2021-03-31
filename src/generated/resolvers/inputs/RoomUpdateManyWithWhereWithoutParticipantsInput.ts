import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoomScalarWhereInput } from "../inputs/RoomScalarWhereInput";
import { RoomUpdateManyMutationInput } from "../inputs/RoomUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoomUpdateManyWithWhereWithoutParticipantsInput {
  @TypeGraphQL.Field(_type => RoomScalarWhereInput, {
    nullable: false
  })
  where!: RoomScalarWhereInput;

  @TypeGraphQL.Field(_type => RoomUpdateManyMutationInput, {
    nullable: false
  })
  data!: RoomUpdateManyMutationInput;
}
