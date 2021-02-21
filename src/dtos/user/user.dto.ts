import { IsEmail, IsString } from "class-validator";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import { CommonOutput } from "../common.dto";
import { User } from "@generated/type-graphql";

@InputType()
export class CreateAccountInput {
  @Field((type) => String)
  @IsString()
  username: string;

  @Field((type) => String)
  @IsEmail()
  email: string;

  @Field((type) => String)
  firstName: string;

  @Field((type) => String, { nullable: true })
  lastName?: string;

  @Field((type) => String)
  password: string;
}

@ObjectType()
export class CreateAccountOutput extends CommonOutput {}

@InputType()
export class SeeProfileInput {
  @Field((type) => Int)
  username: string;
}

@ObjectType()
export class SeeprofileOutput extends CommonOutput {
  @Field((type) => User, { nullable: true })
  user?: User;
}

@InputType()
export class LoginInput {
  @Field((type) => String)
  username: string;

  @Field((type) => String)
  password: string;
}
