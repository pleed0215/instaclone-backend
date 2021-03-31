import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoUpdateWithoutUserInput } from "../inputs/PhotoUpdateWithoutUserInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: false
  })
  where!: PhotoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PhotoUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PhotoUpdateWithoutUserInput;
}
