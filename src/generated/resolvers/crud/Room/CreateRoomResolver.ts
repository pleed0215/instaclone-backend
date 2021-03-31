import * as TypeGraphQL from "type-graphql";
import { CreateRoomArgs } from "./args/CreateRoomArgs";
import { Room } from "../../../models/Room";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Room)
export class CreateRoomResolver {
  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: false
  })
  async createRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRoomArgs): Promise<Room> {
    return getPrismaFromContext(ctx).room.create(args);
  }
}
