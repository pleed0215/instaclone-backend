import * as TypeGraphQL from "type-graphql";
import { FindFirstHashTagArgs } from "./args/FindFirstHashTagArgs";
import { HashTag } from "../../../models/HashTag";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => HashTag)
export class FindFirstHashTagResolver {
  @TypeGraphQL.Query(_returns => HashTag, {
    nullable: true
  })
  async findFirstHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstHashTagArgs): Promise<HashTag | null> {
    return getPrismaFromContext(ctx).hashTag.findFirst(args);
  }
}
