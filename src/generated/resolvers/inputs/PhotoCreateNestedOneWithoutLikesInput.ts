import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateOrConnectWithoutLikesInput } from "../inputs/PhotoCreateOrConnectWithoutLikesInput";
import { PhotoCreateWithoutLikesInput } from "../inputs/PhotoCreateWithoutLikesInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoCreateNestedOneWithoutLikesInput {
  @TypeGraphQL.Field(_type => PhotoCreateWithoutLikesInput, {
    nullable: true
  })
  create?: PhotoCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => PhotoCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: PhotoCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: true
  })
  connect?: PhotoWhereUniqueInput | undefined;
}
