import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashTagUpdateInput } from "../../../inputs/HashTagUpdateInput";
import { HashTagWhereUniqueInput } from "../../../inputs/HashTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateHashTagArgs {
  @TypeGraphQL.Field(_type => HashTagUpdateInput, {
    nullable: false
  })
  data!: HashTagUpdateInput;

  @TypeGraphQL.Field(_type => HashTagWhereUniqueInput, {
    nullable: false
  })
  where!: HashTagWhereUniqueInput;
}
