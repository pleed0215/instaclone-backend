import * as TypeGraphQL from "type-graphql";
import { UpdateHashTagArgs } from "./args/UpdateHashTagArgs";
import { HashTag } from "../../../models/HashTag";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => HashTag)
export class UpdateHashTagResolver {
  @TypeGraphQL.Mutation(_returns => HashTag, {
    nullable: true
  })
  async updateHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateHashTagArgs): Promise<HashTag | null> {
    return getPrismaFromContext(ctx).hashTag.update(args);
  }
}
