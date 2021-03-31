import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashTagWhereInput } from "../inputs/HashTagWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashTagListRelationFilter {
  @TypeGraphQL.Field(_type => HashTagWhereInput, {
    nullable: true
  })
  every?: HashTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => HashTagWhereInput, {
    nullable: true
  })
  some?: HashTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => HashTagWhereInput, {
    nullable: true
  })
  none?: HashTagWhereInput | undefined;
}
