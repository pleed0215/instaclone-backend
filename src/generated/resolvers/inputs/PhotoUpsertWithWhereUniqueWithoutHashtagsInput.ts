import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateWithoutHashtagsInput } from "../inputs/PhotoCreateWithoutHashtagsInput";
import { PhotoUpdateWithoutHashtagsInput } from "../inputs/PhotoUpdateWithoutHashtagsInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoUpsertWithWhereUniqueWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: false
  })
  where!: PhotoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PhotoUpdateWithoutHashtagsInput, {
    nullable: false
  })
  update!: PhotoUpdateWithoutHashtagsInput;

  @TypeGraphQL.Field(_type => PhotoCreateWithoutHashtagsInput, {
    nullable: false
  })
  create!: PhotoCreateWithoutHashtagsInput;
}
