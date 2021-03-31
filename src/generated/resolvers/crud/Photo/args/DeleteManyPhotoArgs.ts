import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhotoWhereInput } from "../../../inputs/PhotoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPhotoArgs {
  @TypeGraphQL.Field(_type => PhotoWhereInput, {
    nullable: true
  })
  where?: PhotoWhereInput | undefined;
}
