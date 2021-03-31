import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateOrConnectWithoutLikesInput } from "../inputs/PhotoCreateOrConnectWithoutLikesInput";
import { PhotoCreateWithoutLikesInput } from "../inputs/PhotoCreateWithoutLikesInput";
import { PhotoUpdateWithoutLikesInput } from "../inputs/PhotoUpdateWithoutLikesInput";
import { PhotoUpsertWithoutLikesInput } from "../inputs/PhotoUpsertWithoutLikesInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoUpdateOneRequiredWithoutLikesInput {
  @TypeGraphQL.Field(_type => PhotoCreateWithoutLikesInput, {
    nullable: true
  })
  create?: PhotoCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => PhotoCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: PhotoCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => PhotoUpsertWithoutLikesInput, {
    nullable: true
  })
  upsert?: PhotoUpsertWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: true
  })
  connect?: PhotoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PhotoUpdateWithoutLikesInput, {
    nullable: true
  })
  update?: PhotoUpdateWithoutLikesInput | undefined;
}
