import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateHashTagArgs } from "./args/AggregateHashTagArgs";
import { CreateHashTagArgs } from "./args/CreateHashTagArgs";
import { DeleteHashTagArgs } from "./args/DeleteHashTagArgs";
import { DeleteManyHashTagArgs } from "./args/DeleteManyHashTagArgs";
import { FindFirstHashTagArgs } from "./args/FindFirstHashTagArgs";
import { FindManyHashTagArgs } from "./args/FindManyHashTagArgs";
import { FindUniqueHashTagArgs } from "./args/FindUniqueHashTagArgs";
import { UpdateHashTagArgs } from "./args/UpdateHashTagArgs";
import { UpdateManyHashTagArgs } from "./args/UpdateManyHashTagArgs";
import { UpsertHashTagArgs } from "./args/UpsertHashTagArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { HashTag } from "../../../models/HashTag";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateHashTag } from "../../outputs/AggregateHashTag";

@TypeGraphQL.Resolver(_of => HashTag)
export class HashTagCrudResolver {
  @TypeGraphQL.Query(_returns => HashTag, {
    nullable: true
  })
  async hashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueHashTagArgs): Promise<HashTag | null> {
    return getPrismaFromContext(ctx).hashTag.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => HashTag, {
    nullable: true
  })
  async findFirstHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstHashTagArgs): Promise<HashTag | null> {
    return getPrismaFromContext(ctx).hashTag.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [HashTag], {
    nullable: false
  })
  async hashTags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyHashTagArgs): Promise<HashTag[]> {
    return getPrismaFromContext(ctx).hashTag.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => HashTag, {
    nullable: false
  })
  async createHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateHashTagArgs): Promise<HashTag> {
    return getPrismaFromContext(ctx).hashTag.create(args);
  }

  @TypeGraphQL.Mutation(_returns => HashTag, {
    nullable: true
  })
  async deleteHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteHashTagArgs): Promise<HashTag | null> {
    return getPrismaFromContext(ctx).hashTag.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => HashTag, {
    nullable: true
  })
  async updateHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateHashTagArgs): Promise<HashTag | null> {
    return getPrismaFromContext(ctx).hashTag.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyHashTagArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).hashTag.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyHashTagArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).hashTag.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => HashTag, {
    nullable: false
  })
  async upsertHashTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertHashTagArgs): Promise<HashTag> {
    return getPrismaFromContext(ctx).hashTag.upsert(args);
  }

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
