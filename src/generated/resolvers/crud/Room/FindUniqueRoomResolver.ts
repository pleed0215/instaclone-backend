import * as TypeGraphQL from "type-graphql";
import { FindUniqueRoomArgs } from "./args/FindUniqueRoomArgs";
import { Room } from "../../../models/Room";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Room)
export class FindUniqueRoomResolver {
  @TypeGraphQL.Query(_returns => Room, {
    nullable: true
  })
  async room(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueRoomArgs): Promise<Room | null> {
    return getPrismaFromContext(ctx).room.findUnique(args);
  }
}
