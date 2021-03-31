import * as TypeGraphQL from "type-graphql";
import { UpsertHashTagArgs } from "./args/UpsertHashTagArgs";
import { HashTag } from "../../../models/HashTag";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => HashTag)
export class UpsertHashTagResolver {
  @TypeGraphQL.Mutation(_returns => HashTag, {
    nullable: false
  })
  async upsertHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertHashTagArgs): Promise<HashTag> {
    return getPrismaFromContext(ctx).hashTag.upsert(args);
  }
}
