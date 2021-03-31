import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashTagWhereUniqueInput } from "../../../inputs/HashTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteHashTagArgs {
  @TypeGraphQL.Field(_type => HashTagWhereUniqueInput, {
    nullable: false
  })
  where!: HashTagWhereUniqueInput;
}
