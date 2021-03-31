import * as TypeGraphQL from "type-graphql";
import { Like } from "../../../models/Like";
import { Photo } from "../../../models/Photo";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Like)
export class LikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Photo, {
    nullable: false
  })
  async photo(@TypeGraphQL.Root() like: Like, @TypeGraphQL.Ctx() ctx: any): Promise<Photo> {
    return getPrismaFromContext(ctx).like.findUnique({
      where: {
        id: like.id,
      },
    }).photo({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() like: Like, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).like.findUnique({
      where: {
        id: like.id,
      },
    }).user({});
  }
}
