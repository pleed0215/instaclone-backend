import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePhotoArgs } from "./args/AggregatePhotoArgs";
import { CreatePhotoArgs } from "./args/CreatePhotoArgs";
import { DeleteManyPhotoArgs } from "./args/DeleteManyPhotoArgs";
import { DeletePhotoArgs } from "./args/DeletePhotoArgs";
import { FindFirstPhotoArgs } from "./args/FindFirstPhotoArgs";
import { FindManyPhotoArgs } from "./args/FindManyPhotoArgs";
import { FindUniquePhotoArgs } from "./args/FindUniquePhotoArgs";
import { UpdateManyPhotoArgs } from "./args/UpdateManyPhotoArgs";
import { UpdatePhotoArgs } from "./args/UpdatePhotoArgs";
import { UpsertPhotoArgs } from "./args/UpsertPhotoArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Photo } from "../../../models/Photo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePhoto } from "../../outputs/AggregatePhoto";

@TypeGraphQL.Resolver(_of => Photo)
export class PhotoCrudResolver {
  @TypeGraphQL.Query(_returns => Photo, {
    nullable: true
  })
  async photo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniquePhotoArgs): Promise<Photo | null> {
    return getPrismaFromContext(ctx).photo.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Photo, {
    nullable: true
  })
  async findFirstPhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstPhotoArgs): Promise<Photo | null> {
    return getPrismaFromContext(ctx).photo.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Photo], {
    nullable: false
  })
  async photos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPhotoArgs): Promise<Photo[]> {
    return getPrismaFromContext(ctx).photo.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: false
  })
  async createPhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreatePhotoArgs): Promise<Photo> {
    return getPrismaFromContext(ctx).photo.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: true
  })
  async deletePhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeletePhotoArgs): Promise<Photo | null> {
    return getPrismaFromContext(ctx).photo.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: true
  })
  async updatePhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdatePhotoArgs): Promise<Photo | null> {
    return getPrismaFromContext(ctx).photo.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyPhotoArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).photo.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyPhotoArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).photo.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: false
  })
  async upsertPhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertPhotoArgs): Promise<Photo> {
    return getPrismaFromContext(ctx).photo.upsert(args);
  }

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
