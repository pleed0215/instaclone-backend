import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateOrConnectWithoutHashtagsInput } from "../inputs/PhotoCreateOrConnectWithoutHashtagsInput";
import { PhotoCreateWithoutHashtagsInput } from "../inputs/PhotoCreateWithoutHashtagsInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoCreateNestedManyWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => [PhotoCreateWithoutHashtagsInput], {
    nullable: true
  })
  create?: PhotoCreateWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoCreateOrConnectWithoutHashtagsInput], {
    nullable: true
  })
  connectOrCreate?: PhotoCreateOrConnectWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereUniqueInput], {
    nullable: true
  })
  connect?: PhotoWhereUniqueInput[] | undefined;
}
