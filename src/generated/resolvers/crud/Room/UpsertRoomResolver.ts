import * as TypeGraphQL from "type-graphql";
import { UpsertRoomArgs } from "./args/UpsertRoomArgs";
import { Room } from "../../../models/Room";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Room)
export class UpsertRoomResolver {
  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: false
  })
  async upsertRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRoomArgs): Promise<Room> {
    return getPrismaFromContext(ctx).room.upsert(args);
  }
}
