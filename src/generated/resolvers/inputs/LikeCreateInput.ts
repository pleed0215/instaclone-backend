import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateNestedOneWithoutLikesInput } from "../inputs/PhotoCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutLikesInput } from "../inputs/UserCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikesInput;
}
