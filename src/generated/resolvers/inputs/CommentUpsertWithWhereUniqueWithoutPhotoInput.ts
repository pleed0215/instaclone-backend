import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutPhotoInput } from "../inputs/CommentCreateWithoutPhotoInput";
import { CommentUpdateWithoutPhotoInput } from "../inputs/CommentUpdateWithoutPhotoInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutPhotoInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutPhotoInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutPhotoInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutPhotoInput, {
    nullable: false
  })
  create!: CommentCreateWithoutPhotoInput;
}
