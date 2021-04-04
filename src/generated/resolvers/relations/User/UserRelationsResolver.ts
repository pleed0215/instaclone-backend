import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Like } from "../../../models/Like";
import { Message } from "../../../models/Message";
import { Photo } from "../../../models/Photo";
import { Room } from "../../../models/Room";
import { User } from "../../../models/User";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserLikesArgs } from "./args/UserLikesArgs";
import { UserMessagesArgs } from "./args/UserMessagesArgs";
import { UserPhotosArgs } from "./args/UserPhotosArgs";
import { UserRoomsArgs } from "./args/UserRoomsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false,
    description: "@onDelete(SET_NULL)"
  })
  async followers(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).followers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false,
    description: "@onDelete(SET_NULL)"
  })
  async following(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowingArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).following(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Photo], {
    nullable: false,
    description: "@onDelete(CASCADE)"
  })
  async photos(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPhotosArgs): Promise<Photo[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).photos(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Like], {
    nullable: false,
    description: "@onDelete(CASCADE)"
  })
  async likes(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLikesArgs): Promise<Like[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).likes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false,
    description: "@onDelete(CASCADE)"
  })
  async comments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Room], {
    nullable: false,
    description: "@onDelete(SET_NULL)"
  })
  async rooms(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserRoomsArgs): Promise<Room[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).rooms(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false,
    description: "@onDelete(CASCADE)"
  })
  async messages(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserMessagesArgs): Promise<Message[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).messages(args);
  }
}
