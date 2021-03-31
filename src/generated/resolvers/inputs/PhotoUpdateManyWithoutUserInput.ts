import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateOrConnectWithoutUserInput } from "../inputs/PhotoCreateOrConnectWithoutUserInput";
import { PhotoCreateWithoutUserInput } from "../inputs/PhotoCreateWithoutUserInput";
import { PhotoScalarWhereInput } from "../inputs/PhotoScalarWhereInput";
import { PhotoUpdateManyWithWhereWithoutUserInput } from "../inputs/PhotoUpdateManyWithWhereWithoutUserInput";
import { PhotoUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PhotoUpdateWithWhereUniqueWithoutUserInput";
import { PhotoUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PhotoUpsertWithWhereUniqueWithoutUserInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PhotoCreateWithoutUserInput], {
    nullable: true
  })
  create?: PhotoCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PhotoCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: PhotoUpsertWithWhereUniqueWithoutUserInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [PhotoUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: PhotoUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: PhotoUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PhotoScalarWhereInput[] | undefined;
}
