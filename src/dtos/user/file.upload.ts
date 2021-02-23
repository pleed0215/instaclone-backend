import { Field, ObjectType } from "type-graphql";

export interface File {
  filename: string;

  mimetype: string;

  encoding: string;

  createReadStream: Function;
}
