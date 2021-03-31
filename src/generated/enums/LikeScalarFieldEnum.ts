import * as TypeGraphQL from "type-graphql";

export enum LikeScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  photoId = "photoId",
  userId = "userId"
}
TypeGraphQL.registerEnumType(LikeScalarFieldEnum, {
  name: "LikeScalarFieldEnum",
  description: undefined,
});
