import * as TypeGraphQL from "type-graphql";
import { UpsertPhotoArgs } from "./args/UpsertPhotoArgs";
import { Photo } from "../../../models/Photo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class UpsertPhotoResolver {
  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: false
  })
  async upsertPhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertPhotoArgs): Promise<Photo> {
    return getPrismaFromContext(ctx).photo.upsert(args);
  }
}
