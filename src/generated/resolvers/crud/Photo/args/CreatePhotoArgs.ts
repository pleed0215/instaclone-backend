import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhotoCreateInput } from "../../../inputs/PhotoCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePhotoArgs {
  @TypeGraphQL.Field(_type => PhotoCreateInput, {
    nullable: false
  })
  data!: PhotoCreateInput;
}
