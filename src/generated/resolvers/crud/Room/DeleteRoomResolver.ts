import * as TypeGraphQL from "type-graphql";
import { DeleteRoomArgs } from "./args/DeleteRoomArgs";
import { Room } from "../../../models/Room";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Room)
export class DeleteRoomResolver {
  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: true
  })
  async deleteRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRoomArgs): Promise<Room | null> {
    return getPrismaFromContext(ctx).room.delete(args);
  }
}
