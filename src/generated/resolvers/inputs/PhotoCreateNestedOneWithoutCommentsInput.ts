import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateOrConnectWithoutCommentsInput } from "../inputs/PhotoCreateOrConnectWithoutCommentsInput";
import { PhotoCreateWithoutCommentsInput } from "../inputs/PhotoCreateWithoutCommentsInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PhotoCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: PhotoCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => PhotoCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: PhotoCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: true
  })
  connect?: PhotoWhereUniqueInput | undefined;
}
