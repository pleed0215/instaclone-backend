import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateWithoutPhotoInput } from "../inputs/LikeCreateWithoutPhotoInput";
import { LikeUpdateWithoutPhotoInput } from "../inputs/LikeUpdateWithoutPhotoInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeUpsertWithWhereUniqueWithoutPhotoInput {
  @TypeGraphQL.Field(_type => LikeWhereUniqueInput, {
    nullable: false
  })
  where!: LikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikeUpdateWithoutPhotoInput, {
    nullable: false
  })
  update!: LikeUpdateWithoutPhotoInput;

  @TypeGraphQL.Field(_type => LikeCreateWithoutPhotoInput, {
    nullable: false
  })
  create!: LikeCreateWithoutPhotoInput;
}
