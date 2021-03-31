import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateWithoutCommentsInput } from "../inputs/PhotoCreateWithoutCommentsInput";
import { PhotoUpdateWithoutCommentsInput } from "../inputs/PhotoUpdateWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PhotoUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: PhotoUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => PhotoCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: PhotoCreateWithoutCommentsInput;
}
