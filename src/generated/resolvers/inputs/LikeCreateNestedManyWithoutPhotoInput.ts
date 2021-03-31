import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateOrConnectWithoutPhotoInput } from "../inputs/LikeCreateOrConnectWithoutPhotoInput";
import { LikeCreateWithoutPhotoInput } from "../inputs/LikeCreateWithoutPhotoInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeCreateNestedManyWithoutPhotoInput {
  @TypeGraphQL.Field(_type => [LikeCreateWithoutPhotoInput], {
    nullable: true
  })
  create?: LikeCreateWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutPhotoInput], {
    nullable: true
  })
  connectOrCreate?: LikeCreateOrConnectWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  connect?: LikeWhereUniqueInput[] | undefined;
}
