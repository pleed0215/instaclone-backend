import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashTagUpdateManyMutationInput } from "../../../inputs/HashTagUpdateManyMutationInput";
import { HashTagWhereInput } from "../../../inputs/HashTagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyHashTagArgs {
  @TypeGraphQL.Field(_type => HashTagUpdateManyMutationInput, {
    nullable: false
  })
  data!: HashTagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => HashTagWhereInput, {
    nullable: true
  })
  where?: HashTagWhereInput | undefined;
}
