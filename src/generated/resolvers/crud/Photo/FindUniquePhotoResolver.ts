import * as TypeGraphQL from "type-graphql";
import { FindUniquePhotoArgs } from "./args/FindUniquePhotoArgs";
import { Photo } from "../../../models/Photo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class FindUniquePhotoResolver {
  @TypeGraphQL.Query(_returns => Photo, {
    nullable: true
  })
  async photo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniquePhotoArgs): Promise<Photo | null> {
    return getPrismaFromContext(ctx).photo.findUnique(args);
  }
}
