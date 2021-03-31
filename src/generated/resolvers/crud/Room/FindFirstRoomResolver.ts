import * as TypeGraphQL from "type-graphql";
import { FindFirstRoomArgs } from "./args/FindFirstRoomArgs";
import { Room } from "../../../models/Room";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Room)
export class FindFirstRoomResolver {
  @TypeGraphQL.Query(_returns => Room, {
    nullable: true
  })
  async findFirstRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstRoomArgs): Promise<Room | null> {
    return getPrismaFromContext(ctx).room.findFirst(args);
  }
}
