import * as TypeGraphQL from "type-graphql";
import { UpdatePhotoArgs } from "./args/UpdatePhotoArgs";
import { Photo } from "../../../models/Photo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class UpdatePhotoResolver {
  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: true
  })
  async updatePhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdatePhotoArgs): Promise<Photo | null> {
    return getPrismaFromContext(ctx).photo.update(args);
  }
}
