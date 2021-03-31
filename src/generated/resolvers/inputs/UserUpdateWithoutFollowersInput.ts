import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateManyWithoutUserInput } from "../inputs/CommentUpdateManyWithoutUserInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LikeUpdateManyWithoutUserInput } from "../inputs/LikeUpdateManyWithoutUserInput";
import { MessageUpdateManyWithoutUserInput } from "../inputs/MessageUpdateManyWithoutUserInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PhotoUpdateManyWithoutUserInput } from "../inputs/PhotoUpdateManyWithoutUserInput";
import { RoomUpdateManyWithoutParticipantsInput } from "../inputs/RoomUpdateManyWithoutParticipantsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutFollowersInput } from "../inputs/UserUpdateManyWithoutFollowersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutFollowersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  bio?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatar?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowersInput, {
    nullable: true
  })
  following?: UserUpdateManyWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => PhotoUpdateManyWithoutUserInput, {
    nullable: true
  })
  photos?: PhotoUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => LikeUpdateManyWithoutUserInput, {
    nullable: true
  })
  likes?: LikeUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutUserInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => RoomUpdateManyWithoutParticipantsInput, {
    nullable: true
  })
  rooms?: RoomUpdateManyWithoutParticipantsInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutUserInput, {
    nullable: true
  })
  messages?: MessageUpdateManyWithoutUserInput | undefined;
}
