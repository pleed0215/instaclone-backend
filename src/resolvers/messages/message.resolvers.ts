import {
  Arg,
  Authorized,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
  Subscription,
} from "type-graphql";
import { Room, Message, User } from "@generated/type-graphql";
import {
  FetchMessagesInput,
  FetchMessagesOutput,
  SeeRoomInput,
  SeeRoomOutput,
  SeeRoomsOutput,
  SendMessageInput,
  SendMessageOutput,
} from "../../dtos/message.dto";
import { MessageService } from "./message.service";
import { AuthUser } from "../../auth/auth.decorator";
import { PUBSUB_NEW_MESSAGE } from "./message.constant";

@Resolver((of) => Room)
export class RoomResolver {
  constructor(private readonly messageService: MessageService) {
    this.messageService = new MessageService();
  }

  @Query((returns) => SeeRoomsOutput)
  @Authorized()
  seeRooms(@AuthUser() authUser): Promise<SeeRoomsOutput> {
    return this.messageService.seeRooms(authUser);
  }

  @Query((returns) => SeeRoomOutput)
  @Authorized()
  seeRoom(
    @AuthUser() authUser,
    @Arg("input") input: SeeRoomInput
  ): Promise<SeeRoomOutput> {
    return this.messageService.seeRoom(authUser, input);
  }

  @Mutation((returns) => FetchMessagesOutput)
  fetchAndReadMessages(
    @Arg("input") input: FetchMessagesInput
  ): Promise<FetchMessagesOutput> {
    return this.messageService.fetchMessages(input);
  }

  @FieldResolver((returns) => Int)
  @Authorized()
  numUnread(@AuthUser() authUser: User, @Root() room: Room): Promise<number> {
    return this.messageService.numUnread(room.id, authUser.id);
  }

  @FieldResolver((returns) => Message, { nullable: true })
  @Authorized()
  latestMessage(@Root() room: Room): Promise<Message | null> {
    return this.messageService.latestMessage(room.id);
  }

  @Subscription((returns) => Message, {
    topics: PUBSUB_NEW_MESSAGE,
    filter: ({ payload, args, context }) =>
      payload.message.roomId === args.roomId,
    nullable: true,
  })
  @Authorized()
  waitNewMessage(
    @Root() payload,
    @Arg("roomId", (types) => Int) roomId
  ): Message | null {
    if (payload.message) {
      return payload.message;
    } else {
      return null;
    }
  }
}

@Resolver((of) => Message)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {
    this.messageService = new MessageService();
  }
  @Mutation((returns) => SendMessageOutput)
  @Authorized()
  sendMessage(
    @AuthUser() authUser,
    @Arg("input") input: SendMessageInput
  ): Promise<SendMessageOutput> {
    return this.messageService.sendMessage(authUser, input);
  }
}
