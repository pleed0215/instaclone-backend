import * as TypeGraphQL from "type-graphql";

export enum PhotoScalarFieldEnum {
  id = "id",
  userId = "userId",
  file = "file",
  caption = "caption",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(PhotoScalarFieldEnum, {
  name: "PhotoScalarFieldEnum",
  description: undefined,
});
