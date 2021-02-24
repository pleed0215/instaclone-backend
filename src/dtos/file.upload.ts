import { Field, ObjectType } from "type-graphql";

export interface FileUpload {
  filename: string;

  mimetype: string;

  encoding: string;

  createReadStream: Function;
}
