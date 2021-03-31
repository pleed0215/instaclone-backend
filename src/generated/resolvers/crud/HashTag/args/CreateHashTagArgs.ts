import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashTagCreateInput } from "../../../inputs/HashTagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateHashTagArgs {
  @TypeGraphQL.Field(_type => HashTagCreateInput, {
    nullable: false
  })
  data!: HashTagCreateInput;
}
