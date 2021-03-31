import * as TypeGraphQL from "type-graphql";
import { DeleteManyHashTagArgs } from "./args/DeleteManyHashTagArgs";
import { HashTag } from "../../../models/HashTag";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => HashTag)
export class DeleteManyHashTagResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyHashTagArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).hashTag.deleteMany(args);
  }
}
