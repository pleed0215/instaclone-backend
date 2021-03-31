import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashTagWhereUniqueInput } from "../../../inputs/HashTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueHashTagArgs {
  @TypeGraphQL.Field(_type => HashTagWhereUniqueInput, {
    nullable: false
  })
  where!: HashTagWhereUniqueInput;
}
