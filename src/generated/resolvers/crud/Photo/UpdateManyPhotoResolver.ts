import * as TypeGraphQL from "type-graphql";
import { UpdateManyPhotoArgs } from "./args/UpdateManyPhotoArgs";
import { Photo } from "../../../models/Photo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class UpdateManyPhotoResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyPhotoArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).photo.updateMany(args);
  }
}
