import * as TypeGraphQL from "type-graphql";

export enum HashTagScalarFieldEnum {
  id = "id",
  hashtag = "hashtag",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(HashTagScalarFieldEnum, {
  name: "HashTagScalarFieldEnum",
  description: undefined,
});
