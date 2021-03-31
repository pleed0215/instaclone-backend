import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePhotoArgs } from "./args/AggregatePhotoArgs";
import { Photo } from "../../../models/Photo";
import { AggregatePhoto } from "../../outputs/AggregatePhoto";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class AggregatePhotoResolver {
  @TypeGraphQL.Query(_returns => AggregatePhoto, {
    nullable: false
  })
  async aggregatePhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePhotoArgs): Promise<AggregatePhoto> {
    return getPrismaFromContext(ctx).photo.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
