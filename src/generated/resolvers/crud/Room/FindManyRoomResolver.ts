import * as TypeGraphQL from "type-graphql";
import { FindManyRoomArgs } from "./args/FindManyRoomArgs";
import { Room } from "../../../models/Room";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Room)
export class FindManyRoomResolver {
  @TypeGraphQL.Query(_returns => [Room], {
    nullable: false
  })
  async rooms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRoomArgs): Promise<Room[]> {
    return getPrismaFromContext(ctx).room.findMany(args);
  }
}
