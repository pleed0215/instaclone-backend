import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateWithoutCommentsInput } from "../inputs/PhotoCreateWithoutCommentsInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: false
  })
  where!: PhotoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PhotoCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: PhotoCreateWithoutCommentsInput;
}
