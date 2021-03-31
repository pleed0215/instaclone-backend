import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { HashTagListRelationFilter } from "../inputs/HashTagListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LikeListRelationFilter } from "../inputs/LikeListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoWhereInput {
  @TypeGraphQL.Field(_type => [PhotoWhereInput], {
    nullable: true
  })
  AND?: PhotoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereInput], {
    nullable: true
  })
  OR?: PhotoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereInput], {
    nullable: true
  })
  NOT?: PhotoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  file?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  caption?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => HashTagListRelationFilter, {
    nullable: true
  })
  hashtags?: HashTagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => LikeListRelationFilter, {
    nullable: true
  })
  likes?: LikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  comments?: CommentListRelationFilter | undefined;
}
