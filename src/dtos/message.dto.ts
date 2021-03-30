import { Field, InputType, Int, ObjectType } from "type-graphql";
import { CommonOutput } from "./common.dto";
import { Room, Message } from "@generated/type-graphql";

@ObjectType()
export class SeeRoomsOutput extends CommonOutput {
  @Field((type) => [Room], { nullable: true })
  rooms?: Room[];
}

@InputType()
export class SendMessageInput {
  @Field((type) => String)
  payload: string;

  @Field((type) => Int, { nullable: true })
  userId?: number;

  @Field((type) => Int, { nullable: true })
  roomId?: number;
}

@ObjectType()
export class SendMessageOutput extends CommonOutput {
  @Field((type) => Message, { nullable: true })
  message?: Message;
}

@InputType()
export class SeeRoomInput {
  @Field((type) => Int)
  roomId: number;
}

@ObjectType()
export class SeeRoomOutput extends CommonOutput {
  @Field((type) => Room, { nullable: true })
  room?: Room;
}

@InputType()
export class FetchMessagesInput {
  @Field((type) => Int)
  roomId: number;

  @Field((type) => Int, { defaultValue: 0 })
  cursorId?: number = 0;

  @Field((type) => Int, { nullable: true, defaultValue: 10 })
  pageSize?: number;
}

@ObjectType()
export class FetchMessagesOutput extends CommonOutput {
  @Field((type) => [Message], { nullable: true })
  messages?: Message[];

  @Field((type) => Int, { nullable: true })
  count?: number;
}
