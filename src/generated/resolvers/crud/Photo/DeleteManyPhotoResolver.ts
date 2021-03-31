import * as TypeGraphQL from "type-graphql";
import { DeleteManyPhotoArgs } from "./args/DeleteManyPhotoArgs";
import { Photo } from "../../../models/Photo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class DeleteManyPhotoResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPhoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyPhotoArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).photo.deleteMany(args);
  }
}
