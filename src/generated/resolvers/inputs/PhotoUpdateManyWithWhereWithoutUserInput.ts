import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoScalarWhereInput } from "../inputs/PhotoScalarWhereInput";
import { PhotoUpdateManyMutationInput } from "../inputs/PhotoUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => PhotoScalarWhereInput, {
    nullable: false
  })
  where!: PhotoScalarWhereInput;

  @TypeGraphQL.Field(_type => PhotoUpdateManyMutationInput, {
    nullable: false
  })
  data!: PhotoUpdateManyMutationInput;
}
