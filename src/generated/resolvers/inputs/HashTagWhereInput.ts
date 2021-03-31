import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PhotoListRelationFilter } from "../inputs/PhotoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashTagWhereInput {
  @TypeGraphQL.Field(_type => [HashTagWhereInput], {
    nullable: true
  })
  AND?: HashTagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagWhereInput], {
    nullable: true
  })
  OR?: HashTagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagWhereInput], {
    nullable: true
  })
  NOT?: HashTagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  hashtag?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PhotoListRelationFilter, {
    nullable: true
  })
  photos?: PhotoListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
