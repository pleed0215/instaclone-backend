import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateOrConnectWithoutUserInput } from "../inputs/PhotoCreateOrConnectWithoutUserInput";
import { PhotoCreateWithoutUserInput } from "../inputs/PhotoCreateWithoutUserInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PhotoCreateWithoutUserInput], {
    nullable: true
  })
  create?: PhotoCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PhotoCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereUniqueInput], {
    nullable: true
  })
  connect?: PhotoWhereUniqueInput[] | undefined;
}
