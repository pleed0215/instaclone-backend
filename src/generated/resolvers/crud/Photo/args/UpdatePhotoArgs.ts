import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhotoUpdateInput } from "../../../inputs/PhotoUpdateInput";
import { PhotoWhereUniqueInput } from "../../../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePhotoArgs {
  @TypeGraphQL.Field(_type => PhotoUpdateInput, {
    nullable: false
  })
  data!: PhotoUpdateInput;

  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: false
  })
  where!: PhotoWhereUniqueInput;
}
