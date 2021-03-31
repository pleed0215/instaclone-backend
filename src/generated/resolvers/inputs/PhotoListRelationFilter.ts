import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoWhereInput } from "../inputs/PhotoWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoListRelationFilter {
  @TypeGraphQL.Field(_type => PhotoWhereInput, {
    nullable: true
  })
  every?: PhotoWhereInput | undefined;

  @TypeGraphQL.Field(_type => PhotoWhereInput, {
    nullable: true
  })
  some?: PhotoWhereInput | undefined;

  @TypeGraphQL.Field(_type => PhotoWhereInput, {
    nullable: true
  })
  none?: PhotoWhereInput | undefined;
}
