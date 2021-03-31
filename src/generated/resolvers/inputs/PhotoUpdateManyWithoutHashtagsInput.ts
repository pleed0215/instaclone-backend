import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateOrConnectWithoutHashtagsInput } from "../inputs/PhotoCreateOrConnectWithoutHashtagsInput";
import { PhotoCreateWithoutHashtagsInput } from "../inputs/PhotoCreateWithoutHashtagsInput";
import { PhotoScalarWhereInput } from "../inputs/PhotoScalarWhereInput";
import { PhotoUpdateManyWithWhereWithoutHashtagsInput } from "../inputs/PhotoUpdateManyWithWhereWithoutHashtagsInput";
import { PhotoUpdateWithWhereUniqueWithoutHashtagsInput } from "../inputs/PhotoUpdateWithWhereUniqueWithoutHashtagsInput";
import { PhotoUpsertWithWhereUniqueWithoutHashtagsInput } from "../inputs/PhotoUpsertWithWhereUniqueWithoutHashtagsInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoUpdateManyWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => [PhotoCreateWithoutHashtagsInput], {
    nullable: true
  })
  create?: PhotoCreateWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoCreateOrConnectWithoutHashtagsInput], {
    nullable: true
  })
  connectOrCreate?: PhotoCreateOrConnectWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoUpsertWithWhereUniqueWithoutHashtagsInput], {
    nullable: true
  })
  upsert?: PhotoUpsertWithWhereUniqueWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereUniqueInput], {
    nullable: true
  })
  connect?: PhotoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereUniqueInput], {
    nullable: true
  })
  set?: PhotoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PhotoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereUniqueInput], {
    nullable: true
  })
  delete?: PhotoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoUpdateWithWhereUniqueWithoutHashtagsInput], {
    nullable: true
  })
  update?: PhotoUpdateWithWhereUniqueWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoUpdateManyWithWhereWithoutHashtagsInput], {
    nullable: true
  })
  updateMany?: PhotoUpdateManyWithWhereWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PhotoScalarWhereInput[] | undefined;
}
