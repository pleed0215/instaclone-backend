import * as TypeGraphQL from "type-graphql";
import { UpdateManyHashTagArgs } from "./args/UpdateManyHashTagArgs";
import { HashTag } from "../../../models/HashTag";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => HashTag)
export class UpdateManyHashTagResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyHashTagArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).hashTag.updateMany(args);
  }
}
