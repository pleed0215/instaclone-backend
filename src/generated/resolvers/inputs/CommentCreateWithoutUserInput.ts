import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateNestedOneWithoutCommentsInput } from "../inputs/PhotoCreateNestedOneWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  payload!: string;

  @TypeGraphQL.Field(_type => PhotoCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  photo!: PhotoCreateNestedOneWithoutCommentsInput;
}
