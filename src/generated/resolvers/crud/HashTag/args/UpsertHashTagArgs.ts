import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashTagCreateInput } from "../../../inputs/HashTagCreateInput";
import { HashTagUpdateInput } from "../../../inputs/HashTagUpdateInput";
import { HashTagWhereUniqueInput } from "../../../inputs/HashTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertHashTagArgs {
  @TypeGraphQL.Field(_type => HashTagWhereUniqueInput, {
    nullable: false
  })
  where!: HashTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashTagCreateInput, {
    nullable: false
  })
  create!: HashTagCreateInput;

  @TypeGraphQL.Field(_type => HashTagUpdateInput, {
    nullable: false
  })
  update!: HashTagUpdateInput;
}
