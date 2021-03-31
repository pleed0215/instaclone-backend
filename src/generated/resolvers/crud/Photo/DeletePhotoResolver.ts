import * as TypeGraphQL from "type-graphql";
import { DeletePhotoArgs } from "./args/DeletePhotoArgs";
import { Photo } from "../../../models/Photo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class DeletePhotoResolver {
  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: true
  })
  async deletePhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeletePhotoArgs): Promise<Photo | null> {
    return getPrismaFromContext(ctx).photo.delete(args);
  }
}
