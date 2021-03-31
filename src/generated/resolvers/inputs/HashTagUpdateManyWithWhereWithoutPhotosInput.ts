import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashTagScalarWhereInput } from "../inputs/HashTagScalarWhereInput";
import { HashTagUpdateManyMutationInput } from "../inputs/HashTagUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashTagUpdateManyWithWhereWithoutPhotosInput {
  @TypeGraphQL.Field(_type => HashTagScalarWhereInput, {
    nullable: false
  })
  where!: HashTagScalarWhereInput;

  @TypeGraphQL.Field(_type => HashTagUpdateManyMutationInput, {
    nullable: false
  })
  data!: HashTagUpdateManyMutationInput;
}
