import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutPhotoInput } from "../inputs/CommentCreateOrConnectWithoutPhotoInput";
import { CommentCreateWithoutPhotoInput } from "../inputs/CommentCreateWithoutPhotoInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutPhotoInput } from "../inputs/CommentUpdateManyWithWhereWithoutPhotoInput";
import { CommentUpdateWithWhereUniqueWithoutPhotoInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutPhotoInput";
import { CommentUpsertWithWhereUniqueWithoutPhotoInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutPhotoInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateManyWithoutPhotoInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutPhotoInput], {
    nullable: true
  })
  create?: CommentCreateWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutPhotoInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutPhotoInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutPhotoInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutPhotoInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
