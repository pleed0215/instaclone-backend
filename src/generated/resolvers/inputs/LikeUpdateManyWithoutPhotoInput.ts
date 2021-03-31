import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateOrConnectWithoutPhotoInput } from "../inputs/LikeCreateOrConnectWithoutPhotoInput";
import { LikeCreateWithoutPhotoInput } from "../inputs/LikeCreateWithoutPhotoInput";
import { LikeScalarWhereInput } from "../inputs/LikeScalarWhereInput";
import { LikeUpdateManyWithWhereWithoutPhotoInput } from "../inputs/LikeUpdateManyWithWhereWithoutPhotoInput";
import { LikeUpdateWithWhereUniqueWithoutPhotoInput } from "../inputs/LikeUpdateWithWhereUniqueWithoutPhotoInput";
import { LikeUpsertWithWhereUniqueWithoutPhotoInput } from "../inputs/LikeUpsertWithWhereUniqueWithoutPhotoInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeUpdateManyWithoutPhotoInput {
  @TypeGraphQL.Field(_type => [LikeCreateWithoutPhotoInput], {
    nullable: true
  })
  create?: LikeCreateWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutPhotoInput], {
    nullable: true
  })
  connectOrCreate?: LikeCreateOrConnectWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeUpsertWithWhereUniqueWithoutPhotoInput], {
    nullable: true
  })
  upsert?: LikeUpsertWithWhereUniqueWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  connect?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  set?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  delete?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeUpdateWithWhereUniqueWithoutPhotoInput], {
    nullable: true
  })
  update?: LikeUpdateWithWhereUniqueWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeUpdateManyWithWhereWithoutPhotoInput], {
    nullable: true
  })
  updateMany?: LikeUpdateManyWithWhereWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LikeScalarWhereInput[] | undefined;
}
