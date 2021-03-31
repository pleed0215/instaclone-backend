import * as TypeGraphQL from "type-graphql";
import { FindManyPhotoArgs } from "./args/FindManyPhotoArgs";
import { Photo } from "../../../models/Photo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class FindManyPhotoResolver {
  @TypeGraphQL.Query(_returns => [Photo], {
    nullable: false
  })
  async photos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPhotoArgs): Promise<Photo[]> {
    return getPrismaFromContext(ctx).photo.findMany(args);
  }
}
