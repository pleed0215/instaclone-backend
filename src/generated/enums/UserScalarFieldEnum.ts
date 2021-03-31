import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  firstName = "firstName",
  lastName = "lastName",
  username = "username",
  email = "email",
  password = "password",
  bio = "bio",
  avatar = "avatar",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
