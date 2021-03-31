import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhotoUpdateManyMutationInput } from "../../../inputs/PhotoUpdateManyMutationInput";
import { PhotoWhereInput } from "../../../inputs/PhotoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPhotoArgs {
  @TypeGraphQL.Field(_type => PhotoUpdateManyMutationInput, {
    nullable: false
  })
  data!: PhotoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PhotoWhereInput, {
    nullable: true
  })
  where?: PhotoWhereInput | undefined;
}
