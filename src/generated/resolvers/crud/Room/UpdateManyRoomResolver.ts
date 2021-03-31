import * as TypeGraphQL from "type-graphql";
import { UpdateManyRoomArgs } from "./args/UpdateManyRoomArgs";
import { Room } from "../../../models/Room";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Room)
export class UpdateManyRoomResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRoomArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).room.updateMany(args);
  }
}
