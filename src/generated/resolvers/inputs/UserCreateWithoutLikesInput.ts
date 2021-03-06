import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { MessageCreateNestedManyWithoutUserInput } from "../inputs/MessageCreateNestedManyWithoutUserInput";
import { PhotoCreateNestedManyWithoutUserInput } from "../inputs/PhotoCreateNestedManyWithoutUserInput";
import { RoomCreateNestedManyWithoutParticipantsInput } from "../inputs/RoomCreateNestedManyWithoutParticipantsInput";
import { UserCreateNestedManyWithoutFollowersInput } from "../inputs/UserCreateNestedManyWithoutFollowersInput";
import { UserCreateNestedManyWithoutFollowingInput } from "../inputs/UserCreateNestedManyWithoutFollowingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutLikesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowingInput, {
    nullable: true
  })
  followers?: UserCreateNestedManyWithoutFollowingInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowersInput, {
    nullable: true
  })
  following?: UserCreateNestedManyWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => PhotoCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  photos?: PhotoCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => RoomCreateNestedManyWithoutParticipantsInput, {
    nullable: true
  })
  rooms?: RoomCreateNestedManyWithoutParticipantsInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  messages?: MessageCreateNestedManyWithoutUserInput | undefined;
}
