import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikePhotoIdUserIdCompoundUniqueInput } from "../inputs/LikePhotoIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => LikePhotoIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  photoId_userId?: LikePhotoIdUserIdCompoundUniqueInput | undefined;
}
