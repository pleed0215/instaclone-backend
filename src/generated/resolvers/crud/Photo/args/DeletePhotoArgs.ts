import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhotoWhereUniqueInput } from "../../../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePhotoArgs {
  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: false
  })
  where!: PhotoWhereUniqueInput;
}
