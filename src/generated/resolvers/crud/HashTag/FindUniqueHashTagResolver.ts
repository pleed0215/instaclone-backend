import * as TypeGraphQL from "type-graphql";
import { FindUniqueHashTagArgs } from "./args/FindUniqueHashTagArgs";
import { HashTag } from "../../../models/HashTag";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => HashTag)
export class FindUniqueHashTagResolver {
  @TypeGraphQL.Query(_returns => HashTag, {
    nullable: true
  })
  async hashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueHashTagArgs): Promise<HashTag | null> {
    return getPrismaFromContext(ctx).hashTag.findUnique(args);
  }
}
