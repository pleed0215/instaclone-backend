import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateHashTagArgs } from "./args/AggregateHashTagArgs";
import { HashTag } from "../../../models/HashTag";
import { AggregateHashTag } from "../../outputs/AggregateHashTag";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => HashTag)
export class AggregateHashTagResolver {
  @TypeGraphQL.Query(_returns => AggregateHashTag, {
    nullable: false
  })
  async aggregateHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateHashTagArgs): Promise<AggregateHashTag> {
    return getPrismaFromContext(ctx).hashTag.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
