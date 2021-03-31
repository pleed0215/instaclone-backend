import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoWhereInput } from "../inputs/PhotoWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoRelationFilter {
  @TypeGraphQL.Field(_type => PhotoWhereInput, {
    nullable: true
  })
  is?: PhotoWhereInput | undefined;

  @TypeGraphQL.Field(_type => PhotoWhereInput, {
    nullable: true
  })
  isNot?: PhotoWhereInput | undefined;
}
