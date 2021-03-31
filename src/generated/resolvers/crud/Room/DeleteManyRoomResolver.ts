import * as TypeGraphQL from "type-graphql";
import { DeleteManyRoomArgs } from "./args/DeleteManyRoomArgs";
import { Room } from "../../../models/Room";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Room)
export class DeleteManyRoomResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRoomArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).room.deleteMany(args);
  }
}
