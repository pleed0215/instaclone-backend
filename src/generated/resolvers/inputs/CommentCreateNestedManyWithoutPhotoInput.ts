import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutPhotoInput } from "../inputs/CommentCreateOrConnectWithoutPhotoInput";
import { CommentCreateWithoutPhotoInput } from "../inputs/CommentCreateWithoutPhotoInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateNestedManyWithoutPhotoInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutPhotoInput], {
    nullable: true
  })
  create?: CommentCreateWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutPhotoInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutPhotoInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
