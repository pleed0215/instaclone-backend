import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashTagCreateWithoutPhotosInput } from "../inputs/HashTagCreateWithoutPhotosInput";
import { HashTagUpdateWithoutPhotosInput } from "../inputs/HashTagUpdateWithoutPhotosInput";
import { HashTagWhereUniqueInput } from "../inputs/HashTagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashTagUpsertWithWhereUniqueWithoutPhotosInput {
  @TypeGraphQL.Field(_type => HashTagWhereUniqueInput, {
    nullable: false
  })
  where!: HashTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashTagUpdateWithoutPhotosInput, {
    nullable: false
  })
  update!: HashTagUpdateWithoutPhotosInput;

  @TypeGraphQL.Field(_type => HashTagCreateWithoutPhotosInput, {
    nullable: false
  })
  create!: HashTagCreateWithoutPhotosInput;
}
