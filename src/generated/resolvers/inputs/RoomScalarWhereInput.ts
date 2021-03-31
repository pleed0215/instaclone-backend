import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoomScalarWhereInput {
  @TypeGraphQL.Field(_type => [RoomScalarWhereInput], {
    nullable: true
  })
  AND?: RoomScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoomScalarWhereInput], {
    nullable: true
  })
  OR?: RoomScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoomScalarWhereInput], {
    nullable: true
  })
  NOT?: RoomScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
