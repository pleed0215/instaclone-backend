import * as TypeGraphQL from "type-graphql";
import { Message } from "../../../models/Message";
import { Room } from "../../../models/Room";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Message)
export class MessageRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).message.findUnique({
      where: {
        id: message.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Room, {
    nullable: false
  })
  async room(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any): Promise<Room> {
    return getPrismaFromContext(ctx).message.findUnique({
      where: {
        id: message.id,
      },
    }).room({});
  }
}
