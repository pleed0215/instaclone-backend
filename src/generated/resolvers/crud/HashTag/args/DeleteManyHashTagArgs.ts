import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashTagWhereInput } from "../../../inputs/HashTagWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyHashTagArgs {
  @TypeGraphQL.Field(_type => HashTagWhereInput, {
    nullable: true
  })
  where?: HashTagWhereInput | undefined;
}
