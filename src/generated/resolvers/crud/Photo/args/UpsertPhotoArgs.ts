import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhotoCreateInput } from "../../../inputs/PhotoCreateInput";
import { PhotoUpdateInput } from "../../../inputs/PhotoUpdateInput";
import { PhotoWhereUniqueInput } from "../../../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPhotoArgs {
  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: false
  })
  where!: PhotoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PhotoCreateInput, {
    nullable: false
  })
  create!: PhotoCreateInput;

  @TypeGraphQL.Field(_type => PhotoUpdateInput, {
    nullable: false
  })
  update!: PhotoUpdateInput;
}
