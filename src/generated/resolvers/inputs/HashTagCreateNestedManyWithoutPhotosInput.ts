import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashTagCreateOrConnectWithoutPhotosInput } from "../inputs/HashTagCreateOrConnectWithoutPhotosInput";
import { HashTagCreateWithoutPhotosInput } from "../inputs/HashTagCreateWithoutPhotosInput";
import { HashTagWhereUniqueInput } from "../inputs/HashTagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashTagCreateNestedManyWithoutPhotosInput {
  @TypeGraphQL.Field(_type => [HashTagCreateWithoutPhotosInput], {
    nullable: true
  })
  create?: HashTagCreateWithoutPhotosInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagCreateOrConnectWithoutPhotosInput], {
    nullable: true
  })
  connectOrCreate?: HashTagCreateOrConnectWithoutPhotosInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagWhereUniqueInput], {
    nullable: true
  })
  connect?: HashTagWhereUniqueInput[] | undefined;
}
