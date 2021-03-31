import * as TypeGraphQL from "type-graphql";
import { UpdateRoomArgs } from "./args/UpdateRoomArgs";
import { Room } from "../../../models/Room";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Room)
export class UpdateRoomResolver {
  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: true
  })
  async updateRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRoomArgs): Promise<Room | null> {
    return getPrismaFromContext(ctx).room.update(args);
  }
}
