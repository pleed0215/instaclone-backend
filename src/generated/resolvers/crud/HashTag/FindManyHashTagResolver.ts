import * as TypeGraphQL from "type-graphql";
import { FindManyHashTagArgs } from "./args/FindManyHashTagArgs";
import { HashTag } from "../../../models/HashTag";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => HashTag)
export class FindManyHashTagResolver {
  @TypeGraphQL.Query(_returns => [HashTag], {
    nullable: false
  })
  async hashTags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyHashTagArgs): Promise<HashTag[]> {
    return getPrismaFromContext(ctx).hashTag.findMany(args);
  }
}
