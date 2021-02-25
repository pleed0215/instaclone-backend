import {
  CreateAccountInput,
  CreateAccountOutput,
  ToggleFollowUserInput,
  ToggleFollowUserOutput,
  LoginInput,
  LoginOutput,
  SeeProfileInput,
  SeeprofileOutput,
  UpdateProfileInput,
  UpdateProfileOutput,
  SeeFollowersInput,
  SeeFollowersOutput,
  SeeFollowingsInput,
  SeeFollowingsOutput,
} from "../../dtos/user/user.dto";
import { prismaClient } from "../../prisma";
import { SECRET_KEY } from "../../utils";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { uploadFile } from "../../aws/s3";
import { User } from "@generated/type-graphql";

export class UserService {
  async seeProfile(input: SeeProfileInput): Promise<SeeprofileOutput> {
    const { username } = input;
    try {
      const user = await prismaClient.user.findUnique({ where: { username } });

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

  async createAccount(input: CreateAccountInput): Promise<CreateAccountOutput> {
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

  async login({ username, password }: LoginInput): Promise<LoginOutput> {
    try {
      const user = await prismaClient.user.findUnique({ where: { username } });

      if (user) {
        if (await bcrypt.compare(password, user.password)) {
          const token = jwt.sign({ id: user.id }, SECRET_KEY);
          return {
            ok: true,
            token,
          };
        } else {
          throw new Error("Password incorrect");
        }
      } else {
        throw new Error("User does not exist.");
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async updateProfile({
    id,
    ...updateInput
  }: UpdateProfileInput): Promise<UpdateProfileOutput> {
    try {
      const user = await prismaClient.user.findUnique({ where: { id } });
      if (user) {
        const {
          password,
          avatar: avatarInput,
          ...elseAvatarAndPassword
        } = updateInput;
        let avatar;

        if (avatarInput) {
          // upload to s3 bucket.
          const uploadResult = await uploadFile(await avatarInput);
          if (uploadResult.ok) {
            avatar = uploadResult.url;
            console.log(uploadResult);
          } else {
            throw new Error("Failed to upload");
          }
        }

        let newPassword;
        // new password -> hash again password.
        if (password) {
          newPassword = await bcrypt.hash(password, 10);
        }
        const result = await prismaClient.user.update({
          where: { id },
          data: {
            // conditional spread operator.
            ...(newPassword && { password: newPassword }),
            ...(avatar && { avatar }),
            ...elseAvatarAndPassword,
          },
        });

        if (result.id) {
          return {
            ok: true,
          };
        } else {
          throw new Error("Update profile failed");
        }
      } else {
        throw new Error("Update profile failed. User does not exist.");
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async toggleFollowUser(
    authUser: User,
    { username }: ToggleFollowUserInput
  ): Promise<ToggleFollowUserOutput> {
    try {
      let message;
      if (!authUser) {
        throw new Error(
          "Authentication failed, invalid user information was provided."
        );
      }

      // TODO: follower가 많아질 수록 비효율적인 코드이므로 수정이 필요합니다.
      const userDetail = await prismaClient.user.findUnique({
        where: { id: authUser.id },
        select: {
          id: true,
          following: true,
        },
      });

      if (userDetail?.following?.some((f) => f.username === username)) {
        message = `Unfollowed ${username}.`;

        const result = await prismaClient.user.update({
          where: {
            id: userDetail.id,
          },
          data: {
            following: {
              disconnect: {
                username,
              },
            },
          },
        });

        if (result.id) {
          return {
            ok: true,
            message,
            isFollow: false,
          };
        } else {
          throw new Error("Error occured while removing follower.");
        }
      } else {
        message = `Followed ${username}`;

        const result = await prismaClient.user.update({
          where: {
            id: userDetail?.id,
          },
          data: {
            following: {
              connect: {
                username,
              },
            },
          },
        });

        if (result.id) {
          return {
            ok: true,
            message,
            isFollow: true,
          };
        } else {
          throw new Error("Error occured while adding follower.");
        }
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async seeFollowers({
    username,
    page,
    pageSize,
  }: SeeFollowersInput): Promise<SeeFollowersOutput> {
    try {
      // 제대로 작동 여부 확인 못함.
      const temp = await prismaClient.user.count({
        where: {
          following: {
            some: {
              username,
            },
          },
        },
      });

      const totalCount = temp; //user?.followers.length!;
      const totalPage = Math.ceil(totalCount / pageSize);
      const lastPageCount = totalCount % pageSize;
      const currentCount = page < totalPage ? pageSize : lastPageCount;
      const currentPage = page < totalPage ? page : totalPage;
      const startIndex = (currentPage - 1) * pageSize;
      const followers = await prismaClient.user.findMany({
        where: {
          following: {
            some: {
              username,
            },
          },
        },
        skip: startIndex,
        take: pageSize,
      });
      //const followers = user?.followers.slice(startIndex, currentCount);

      return {
        ok: true,
        totalCount,
        totalPage,
        currentCount,
        currentPage,
        pageSize,
        followers,
      };
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }
  async seeFollowings({
    username,
    page,
    pageSize,
  }: SeeFollowingsInput): Promise<SeeFollowingsOutput> {
    try {
      const temp = await prismaClient.user.count({
        where: {
          followers: {
            some: {
              username,
            },
          },
        },
      });

      const totalCount = temp; //user?.following.length!;
      const totalPage = Math.ceil(totalCount / pageSize);
      const lastPageCount = totalCount % pageSize;
      const currentCount = page < totalPage ? pageSize : lastPageCount;
      const currentPage = page < totalPage ? page : totalPage;
      const startIndex = (currentPage - 1) * pageSize;
      const followings = await prismaClient.user.findMany({
        where: {
          followers: {
            some: {
              username,
            },
          },
        },
        skip: startIndex,
        take: pageSize,
      }); //user?.following.slice(startIndex, currentCount);

      return {
        ok: true,
        totalCount,
        totalPage,
        currentCount,
        currentPage,
        pageSize,
        followings,
      };
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }
}
