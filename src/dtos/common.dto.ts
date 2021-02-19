import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CommonOutput {
  @Field((type) => Boolean)
  ok: boolean;

  @Field((type) => String, { nullable: true })
  error?: string;
}
