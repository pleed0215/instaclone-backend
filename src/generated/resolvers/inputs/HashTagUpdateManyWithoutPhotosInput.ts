import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashTagCreateOrConnectWithoutPhotosInput } from "../inputs/HashTagCreateOrConnectWithoutPhotosInput";
import { HashTagCreateWithoutPhotosInput } from "../inputs/HashTagCreateWithoutPhotosInput";
import { HashTagScalarWhereInput } from "../inputs/HashTagScalarWhereInput";
import { HashTagUpdateManyWithWhereWithoutPhotosInput } from "../inputs/HashTagUpdateManyWithWhereWithoutPhotosInput";
import { HashTagUpdateWithWhereUniqueWithoutPhotosInput } from "../inputs/HashTagUpdateWithWhereUniqueWithoutPhotosInput";
import { HashTagUpsertWithWhereUniqueWithoutPhotosInput } from "../inputs/HashTagUpsertWithWhereUniqueWithoutPhotosInput";
import { HashTagWhereUniqueInput } from "../inputs/HashTagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashTagUpdateManyWithoutPhotosInput {
  @TypeGraphQL.Field(_type => [HashTagCreateWithoutPhotosInput], {
    nullable: true
  })
  create?: HashTagCreateWithoutPhotosInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagCreateOrConnectWithoutPhotosInput], {
    nullable: true
  })
  connectOrCreate?: HashTagCreateOrConnectWithoutPhotosInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagUpsertWithWhereUniqueWithoutPhotosInput], {
    nullable: true
  })
  upsert?: HashTagUpsertWithWhereUniqueWithoutPhotosInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagWhereUniqueInput], {
    nullable: true
  })
  connect?: HashTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagWhereUniqueInput], {
    nullable: true
  })
  set?: HashTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: HashTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagWhereUniqueInput], {
    nullable: true
  })
  delete?: HashTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagUpdateWithWhereUniqueWithoutPhotosInput], {
    nullable: true
  })
  update?: HashTagUpdateWithWhereUniqueWithoutPhotosInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagUpdateManyWithWhereWithoutPhotosInput], {
    nullable: true
  })
  updateMany?: HashTagUpdateManyWithWhereWithoutPhotosInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashTagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: HashTagScalarWhereInput[] | undefined;
}
