import * as TypeGraphQL from "type-graphql";
import { CreateHashTagArgs } from "./args/CreateHashTagArgs";
import { HashTag } from "../../../models/HashTag";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => HashTag)
export class CreateHashTagResolver {
  @TypeGraphQL.Mutation(_returns => HashTag, {
    nullable: false
  })
  async createHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateHashTagArgs): Promise<HashTag> {
    return getPrismaFromContext(ctx).hashTag.create(args);
  }
}
