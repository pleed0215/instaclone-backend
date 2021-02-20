import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "@generated/type-graphql";
import { prismaClient } from "../../prisma";
import {
  CreateAccountInput,
  CreateAccountOutput,
  SeeProfileInput,
  SeeprofileOutput,
} from "../../dtos/user/user.dto";
import * as bcrypt from "bcrypt";

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => SeeprofileOutput)
  async seeProfile(
    @Arg("input") input: SeeProfileInput
  ): Promise<SeeprofileOutput> {
    const { id } = input;
    try {
      const user = await prismaClient.user.findUnique({ where: { id } });

      if (user) {
        return {
          ok: true,
          user,
        };
      } else {
        throw new Error("Cannot create user.");
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  @Mutation((returns) => CreateAccountOutput)
  async createAccount(
    @Arg("input") input: CreateAccountInput
  ): Promise<CreateAccountOutput> {
    const {
      username,
      email,
      password: beforeHash,
      firstName,
      lastName,
    } = input;
    try {
      const existingUser = await prismaClient.user.findFirst({
        where: {
          OR: [
            {
              username,
            },
            {
              email,
            },
          ],
        },
      });
      if (existingUser) {
        throw new Error(
          "That email address or username is already exist. Try another"
        );
      }
      const afterHash = await bcrypt.hash(beforeHash, 10);
      const user = await prismaClient.user.create({
        data: {
          username,
          email,
          password: afterHash,
          firstName,
          lastName,
        },
      });

      if (user) {
        return {
          ok: true,
        };
      } else {
        throw new Error("Cannot create user");
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }
}
