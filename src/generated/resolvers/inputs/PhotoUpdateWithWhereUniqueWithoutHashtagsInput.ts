import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoUpdateWithoutHashtagsInput } from "../inputs/PhotoUpdateWithoutHashtagsInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoUpdateWithWhereUniqueWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: false
  })
  where!: PhotoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PhotoUpdateWithoutHashtagsInput, {
    nullable: false
  })
  data!: PhotoUpdateWithoutHashtagsInput;
}
