import * as TypeGraphQL from "type-graphql";
import { Message } from "../../../models/Message";
import { Room } from "../../../models/Room";
import { User } from "../../../models/User";
import { RoomMessagesArgs } from "./args/RoomMessagesArgs";
import { RoomParticipantsArgs } from "./args/RoomParticipantsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Room)
export class RoomRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async participants(@TypeGraphQL.Root() room: Room, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RoomParticipantsArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).room.findUnique({
      where: {
        id: room.id,
      },
    }).participants(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false
  })
  async messages(@TypeGraphQL.Root() room: Room, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RoomMessagesArgs): Promise<Message[]> {
    return getPrismaFromContext(ctx).room.findUnique({
      where: {
        id: room.id,
      },
    }).messages(args);
  }
}
