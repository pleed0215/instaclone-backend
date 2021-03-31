import * as TypeGraphQL from "type-graphql";
import { FindFirstPhotoArgs } from "./args/FindFirstPhotoArgs";
import { Photo } from "../../../models/Photo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class FindFirstPhotoResolver {
  @TypeGraphQL.Query(_returns => Photo, {
    nullable: true
  })
  async findFirstPhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstPhotoArgs): Promise<Photo | null> {
    return getPrismaFromContext(ctx).photo.findFirst(args);
  }
}
