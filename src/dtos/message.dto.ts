import { Field, InputType, Int, ObjectType } from "type-graphql";
import { CommonOutput } from "./common.dto";
import { Room } from "@generated/type-graphql";

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
export class SendMessageOutput extends CommonOutput {}

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
