import { User, Room, Message } from "@generated/type-graphql";
import {
  SeeRoomInput,
  SeeRoomOutput,
  SeeRoomsOutput,
  SendMessageInput,
  SendMessageOutput,
} from "../../dtos/message.dto";
import { prismaClient } from "../../prisma";

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
        const user = await prismaClient.user.findUnique({
          where: { id: userId },
        });
        if (user) {
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
}
