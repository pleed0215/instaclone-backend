import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { HashTagUpdateManyWithoutPhotosInput } from "../inputs/HashTagUpdateManyWithoutPhotosInput";
import { LikeUpdateManyWithoutPhotoInput } from "../inputs/LikeUpdateManyWithoutPhotoInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPhotosInput } from "../inputs/UserUpdateOneRequiredWithoutPhotosInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoUpdateWithoutCommentsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  file?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  caption?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPhotosInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutPhotosInput | undefined;

  @TypeGraphQL.Field(_type => HashTagUpdateManyWithoutPhotosInput, {
    nullable: true
  })
  hashtags?: HashTagUpdateManyWithoutPhotosInput | undefined;

  @TypeGraphQL.Field(_type => LikeUpdateManyWithoutPhotoInput, {
    nullable: true
  })
  likes?: LikeUpdateManyWithoutPhotoInput | undefined;
}
