import { Field, ObjectType } from "type-graphql";
import { Movie } from "@generated/type-graphql/models";

@ObjectType()
export class CommonOutput {
  @Field((type) => Boolean)
  ok: boolean;

  @Field((type) => String, { nullable: true })
  error?: string;
}

@ObjectType()
export class GetMoviesOutput extends CommonOutput {
  @Field((type) => [Movie], { nullable: true })
  movies?: Array<Movie>;
}
