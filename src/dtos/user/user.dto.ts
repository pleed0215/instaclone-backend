import { IsEmail, IsString } from "class-validator";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import { CommonOutput } from "../common.dto";
import { User } from "@generated/type-graphql";

@InputType("UserInput", { isAbstract: true })
@ObjectType()
export class UserInput {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  firstName: string;

  @Field((type) => String, { nullable: true })
  lastName?: string;

  @Field((type) => String)
  username: string;

  @Field((type) => String)
  email: string;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}

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
  @Field((type) => String)
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

@ObjectType()
export class LoginOutput extends CommonOutput {
  @Field((type) => String, { nullable: true })
  token?: string;
}

type UpdateInput = Partial<UserInput>;

@InputType()
export class UpdateProfileInput {
  @Field((type) => Int)
  id: number;

  @Field((type) => String, { nullable: true })
  firstName?: string;

  @Field((type) => String, { nullable: true })
  lastName?: string;

  @Field((type) => String, { nullable: true })
  username?: string;

  @Field((type) => String, { nullable: true })
  email?: string;

  @Field((type) => String, { nullable: true })
  password?: string;
}

@ObjectType()
export class UpdateProfileOutput extends CommonOutput {}
