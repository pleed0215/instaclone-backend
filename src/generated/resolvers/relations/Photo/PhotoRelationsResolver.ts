import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { HashTag } from "../../../models/HashTag";
import { Like } from "../../../models/Like";
import { Photo } from "../../../models/Photo";
import { User } from "../../../models/User";
import { PhotoCommentsArgs } from "./args/PhotoCommentsArgs";
import { PhotoHashtagsArgs } from "./args/PhotoHashtagsArgs";
import { PhotoLikesArgs } from "./args/PhotoLikesArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class PhotoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() photo: Photo, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).photo.findUnique({
      where: {
        id: photo.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [HashTag], {
    nullable: false,
    description: "@onDelete(SET_NULL)"
  })
  async hashtags(@TypeGraphQL.Root() photo: Photo, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PhotoHashtagsArgs): Promise<HashTag[]> {
    return getPrismaFromContext(ctx).photo.findUnique({
      where: {
        id: photo.id,
      },
    }).hashtags(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Like], {
    nullable: false,
    description: "@onDelete(CASCADE)"
  })
  async likes(@TypeGraphQL.Root() photo: Photo, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PhotoLikesArgs): Promise<Like[]> {
    return getPrismaFromContext(ctx).photo.findUnique({
      where: {
        id: photo.id,
      },
    }).likes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false,
    description: "@onDelete(CASCADE)"
  })
  async comments(@TypeGraphQL.Root() photo: Photo, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PhotoCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).photo.findUnique({
      where: {
        id: photo.id,
      },
    }).comments(args);
  }
}
