import * as TypeGraphQL from "type-graphql";
import { HashTag } from "../../../models/HashTag";
import { Photo } from "../../../models/Photo";
import { HashTagPhotosArgs } from "./args/HashTagPhotosArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => HashTag)
export class HashTagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Photo], {
    nullable: false,
    description: "@onDelete(SET_NULL)"
  })
  async photos(@TypeGraphQL.Root() hashTag: HashTag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: HashTagPhotosArgs): Promise<Photo[]> {
    return getPrismaFromContext(ctx).hashTag.findUnique({
      where: {
        id: hashTag.id,
      },
    }).photos(args);
  }
}
