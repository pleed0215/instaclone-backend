import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateNestedManyWithoutHashtagsInput } from "../inputs/PhotoCreateNestedManyWithoutHashtagsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashTagCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  hashtag!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PhotoCreateNestedManyWithoutHashtagsInput, {
    nullable: true
  })
  photos?: PhotoCreateNestedManyWithoutHashtagsInput | undefined;
}
