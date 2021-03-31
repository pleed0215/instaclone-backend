import * as TypeGraphQL from "type-graphql";
import { DeleteHashTagArgs } from "./args/DeleteHashTagArgs";
import { HashTag } from "../../../models/HashTag";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => HashTag)
export class DeleteHashTagResolver {
  @TypeGraphQL.Mutation(_returns => HashTag, {
    nullable: true
  })
  async deleteHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteHashTagArgs): Promise<HashTag | null> {
    return getPrismaFromContext(ctx).hashTag.delete(args);
  }
}
