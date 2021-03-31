import * as TypeGraphQL from "type-graphql";

export enum RoomScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(RoomScalarFieldEnum, {
  name: "RoomScalarFieldEnum",
  description: undefined,
});
