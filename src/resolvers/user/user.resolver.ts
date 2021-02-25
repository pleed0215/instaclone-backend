import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { User } from "@generated/type-graphql";
import { prismaClient } from "../../prisma";
import {
  CreateAccountInput,
  CreateAccountOutput,
  LoginInput,
  LoginOutput,
  SeeFollowersInput,
  SeeFollowersOutput,
  SeeFollowingsInput,
  SeeFollowingsOutput,
  SeeProfileInput,
  SeeprofileOutput,
  ToggleFollowUserInput,
  ToggleFollowUserOutput,
  UpdateProfileInput,
  UpdateProfileOutput,
} from "../../dtos/user/user.dto";

import { UserService } from "./user.service";
import { AuthUser } from "../../auth/auth.decorator";

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {
    this.userService = new UserService();
  }
  @Query((returns) => SeeprofileOutput)
  seeProfile(@Arg("input") input: SeeProfileInput): Promise<SeeprofileOutput> {
    return this.userService.seeProfile(input);
  }

  @Mutation((returns) => CreateAccountOutput)
  createAccount(
    @Arg("input") input: CreateAccountInput
  ): Promise<CreateAccountOutput> {
    return this.userService.createAccount(input);
  }

  @Mutation((returns) => LoginOutput)
  login(@Arg("input") input: LoginInput): Promise<LoginOutput> {
    return this.userService.login(input);
  }

  @Mutation((returns) => UpdateProfileOutput)
  @Authorized()
  updateProfile(
    @AuthUser() currentUser,
    @Arg("input") input: UpdateProfileInput
  ): Promise<UpdateProfileOutput> {
    return this.userService.updateProfile(input);
  }

  @Mutation((returns) => ToggleFollowUserOutput)
  @Authorized()
  toggleFollow(
    @AuthUser() authUser,
    @Arg("input") input: ToggleFollowUserInput
  ) {
    return this.userService.toggleFollowUser(authUser, input);
  }

  @Query((returns) => SeeFollowersOutput)
  @Authorized()
  seeFollowers(
    @Arg("input") input: SeeFollowersInput
  ): Promise<SeeFollowersOutput> {
    return this.userService.seeFollowers(input);
  }

  @Query((returns) => SeeFollowingsOutput)
  @Authorized()
  seeFollowings(
    @Arg("input") input: SeeFollowingsInput
  ): Promise<SeeFollowingsOutput> {
    return this.userService.seeFollowings(input);
  }
}
