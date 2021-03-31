import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Photo } from "../../../models/Photo";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Photo, {
    nullable: false
  })
  async photo(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Photo> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).photo({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).user({});
  }
}
