import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateNestedOneWithoutLikesInput } from "../inputs/PhotoCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PhotoCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  photo!: PhotoCreateNestedOneWithoutLikesInput;
}
