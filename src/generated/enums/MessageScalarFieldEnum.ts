import * as TypeGraphQL from "type-graphql";

export enum MessageScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  payload = "payload",
  isRead = "isRead",
  userId = "userId",
  roomId = "roomId"
}
TypeGraphQL.registerEnumType(MessageScalarFieldEnum, {
  name: "MessageScalarFieldEnum",
  description: undefined,
});
