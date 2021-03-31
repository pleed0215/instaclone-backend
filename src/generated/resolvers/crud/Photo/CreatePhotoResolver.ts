import * as TypeGraphQL from "type-graphql";
import { CreatePhotoArgs } from "./args/CreatePhotoArgs";
import { Photo } from "../../../models/Photo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class CreatePhotoResolver {
  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: false
  })
  async createPhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreatePhotoArgs): Promise<Photo> {
    return getPrismaFromContext(ctx).photo.create(args);
  }
}
