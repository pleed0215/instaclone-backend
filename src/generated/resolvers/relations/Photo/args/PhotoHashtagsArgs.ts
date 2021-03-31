import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashTagOrderByInput } from "../../../inputs/HashTagOrderByInput";
import { HashTagWhereInput } from "../../../inputs/HashTagWhereInput";
import { HashTagWhereUniqueInput } from "../../../inputs/HashTagWhereUniqueInput";
import { HashTagScalarFieldEnum } from "../../../../enums/HashTagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PhotoHashtagsArgs {
  @TypeGraphQL.Field(_type => HashTagWhereInput, {
    nullable: true
  })
  where?: HashTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HashTagOrderByInput], {
    nullable: true
  })
  orderBy?: HashTagOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => HashTagWhereUniqueInput, {
    nullable: true
  })
  cursor?: HashTagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [HashTagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "hashtag" | "createdAt" | "updatedAt"> | undefined;
}
