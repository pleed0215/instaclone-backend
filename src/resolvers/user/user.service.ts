import fs, { write } from "fs";
import {
  CreateAccountInput,
  CreateAccountOutput,
  LoginInput,
  LoginOutput,
  SeeProfileInput,
  SeeprofileOutput,
  UpdateProfileInput,
  UpdateProfileOutput,
} from "../../dtos/user/user.dto";
import { prismaClient } from "../../prisma";
import { SECRET_KEY } from "../../utils";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

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
          // @ts-ignore
          const { filename, createReadStream } = await avatarInput;
          const readStream: fs.ReadStream = createReadStream();
          console.log(process.cwd() + "/uploads/" + filename);
          const writeStream: fs.WriteStream = fs.createWriteStream(
            process.cwd() +
              "/uploads/" +
              user.id +
              "_" +
              Date.now() +
              "_" +
              filename
          );

          console.log(readStream.pipe(writeStream));
        }

        let newPassword;
        if (password) {
          newPassword = await bcrypt.hash(password, 10);
        }
        const result = await prismaClient.user.update({
          where: { id },
          data: {
            ...(newPassword && { password: newPassword }),
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
}
