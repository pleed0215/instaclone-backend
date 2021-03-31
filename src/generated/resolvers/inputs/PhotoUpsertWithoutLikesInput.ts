import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateWithoutLikesInput } from "../inputs/PhotoCreateWithoutLikesInput";
import { PhotoUpdateWithoutLikesInput } from "../inputs/PhotoUpdateWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => PhotoUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: PhotoUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => PhotoCreateWithoutLikesInput, {
    nullable: false
  })
  create!: PhotoCreateWithoutLikesInput;
}
