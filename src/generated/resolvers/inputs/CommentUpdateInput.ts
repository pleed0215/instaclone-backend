import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PhotoUpdateOneRequiredWithoutCommentsInput } from "../inputs/PhotoUpdateOneRequiredWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  payload?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PhotoUpdateOneRequiredWithoutCommentsInput, {
    nullable: true
  })
  photo?: PhotoUpdateOneRequiredWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCommentsInput | undefined;
}
