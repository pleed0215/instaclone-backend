import { User, Room, Message } from "@generated/type-graphql";
import {
  FetchMessagesInput,
  FetchMessagesOutput,
  SeeRoomInput,
  SeeRoomOutput,
  SeeRoomsOutput,
  SendMessageInput,
  SendMessageOutput,
} from "../../dtos/message.dto";
import { prismaClient } from "../../prisma";
import { pubsub } from "../../pubsub";

export class MessageService {
  async seeRooms(authUser: User): Promise<SeeRoomsOutput> {
    try {
      const rooms = await prismaClient.room.findMany({
        where: {
          participants: {
            some: {
              id: authUser.id,
            },
          },
        },
        include: {
          participants: true,
        },
      });
      return {
        ok: true,
        rooms,
      };
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async sendMessage(
    authUser: User,
    { payload, userId, roomId }: SendMessageInput
  ): Promise<SendMessageOutput> {
    try {
      let room: Room | null = null;
      if (userId) {
        if (userId === authUser.id)
          throw new Error("Cannot send message to self");
        const user = await prismaClient.user.findUnique({
          where: { id: userId },
        });
        if (user) {
          room = await prismaClient.room.findFirst({
            where: {
              AND: [
                {
                  participants: {
                    some: {
                      id: userId,
                    },
                  },
                },
                {
                  participants: {
                    some: {
                      id: authUser.id,
                    },
                  },
                },
              ],
            },
          });

          if (!room) {
            room = await prismaClient.room.create({
              data: {
                participants: {
                  connect: [
                    {
                      id: userId,
                    },
                    {
                      id: authUser.id,
                    },
                  ],
                },
              },
            });
          }
        } else {
          throw new Error(`User id: ${userId} is not exist`);
        }
      } else if (roomId) {
        room = await prismaClient.room.findUnique({ where: { id: roomId } });
        if (!room) {
          throw new Error(`Room id: ${roomId} is not exist.`);
        }
      } else {
        throw new Error("This mutation must be given userId or roomId.");
      }
      const message = await prismaClient.message.create({
        data: {
          payload,
          user: {
            connect: {
              id: authUser.id,
            },
          },
          room: {
            connect: {
              id: room.id,
            },
          },
        },
      });
      pubsub.publish("SAMPLE", { message });
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async seeRoom(
    authUser: User,
    { roomId }: SeeRoomInput
  ): Promise<SeeRoomOutput> {
    try {
      const room = await prismaClient.room.findFirst({
        where: {
          id: roomId,
          participants: {
            some: {
              id: authUser.id,
            },
          },
        },
        include: {
          participants: true,
        },
      });

      if (room) {
        return {
          ok: true,
          room,
        };
      } else {
        throw new Error(`Room id: ${roomId} is not exist.`);
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async fetchMessages({
    roomId,
    cursorId,
    pageSize,
  }: FetchMessagesInput): Promise<FetchMessagesOutput> {
    try {
      const checkMessage = await prismaClient.message.findFirst({
        where: { id: cursorId },
      });
      let checkedCursorId: number | null = null;
      let haveToSkipOne = true;

      if (checkMessage) {
        checkedCursorId = checkMessage.id;
      } else {
        haveToSkipOne = false;
        const latestMessage = await prismaClient.message.findFirst({
          where: { roomId },
          orderBy: { createdAt: "desc" },
        });
        if (!latestMessage) {
          throw new Error("No Message at all");
        } else {
          checkedCursorId = latestMessage?.id;
        }
      }

      const messages = await prismaClient.message.findMany({
        where: {
          roomId,
        },
        take: pageSize,
        skip: haveToSkipOne ? 1 : 0,
        cursor: {
          id: checkedCursorId,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const unreadMessagesIds = messages
        .filter((m) => !m.isRead)
        .map((m) => m.id);
      await prismaClient.message.updateMany({
        where: {
          id: {
            in: unreadMessagesIds,
          },
        },
        data: {
          isRead: true,
        },
      });

      return {
        ok: true,
        messages,
        count: messages.length,
      };
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async numUnread(roomId: number, userId: number): Promise<number> {
    return await prismaClient.message.count({
      where: {
        roomId,
        isRead: false,
        user: {
          id: {
            not: userId,
          },
        },
      },
    });
  }

  async latestMessage(roomId: number): Promise<Message | null> {
    try {
      const [message] = await prismaClient.room
        .findUnique({ where: { id: roomId } })
        .messages({
          orderBy: { createdAt: "desc" },
          take: 1,
        });
      return message;
    } catch {
      return null;
    }
  }
}
