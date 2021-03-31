import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashTagScalarWhereInput {
  @TypeGraphQL.Field(_type => [HashTagScalarWhereInput], {
    nullable: true
  })
  AND?: HashTagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagScalarWhereInput], {
    nullable: true
  })
  OR?: HashTagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagScalarWhereInput], {
    nullable: true
  })
  NOT?: HashTagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  hashtag?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
