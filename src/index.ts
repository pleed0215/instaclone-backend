import { ApolloServer, gql, makeExecutableSchema } from "apollo-server";
import * as dotenv from "dotenv";

import "reflect-metadata";

import { resolvers } from "@generated/type-graphql";
import { buildSchema, buildTypeDefsAndResolvers } from "type-graphql";
import { Context } from "vm";
import { GraphQLSchema } from "graphql";
import { prismaClient } from "./prisma";
import { stitchSchemas } from "graphql-tools";
import * as jwt from "jsonwebtoken";
import { SECRET_KEY } from "./utils";
import { User } from "@generated/type-graphql";
import { UserInput } from "./dtos/user/user.dto";

dotenv.config({ path: __dirname + "/../.env" });

const PORT: number = Number(process.env.PORT) || 3000;

let schema: GraphQLSchema;

const main = async () => {
  const { typeDefs, resolvers: appResolvers } = await buildTypeDefsAndResolvers(
    {
      resolvers: [__dirname + "/**/*.resolver.{ts,js}"],
    }
  );
  // resolvers, and types, made from app
  const appSchema = makeExecutableSchema({ typeDefs, resolvers: appResolvers });

  // resolvers from prisma
  schema = await buildSchema({
    resolvers,
    validate: false,
  });
  const totalSchema = stitchSchemas({ subschemas: [appSchema, schema] });

  const server = new ApolloServer({
    schema: totalSchema,
    playground: true,
    context: async ({ req }): Promise<Context> => {
      const token = req.headers["x-jwt"];
      let user: User | null = null;

      if (token) {
        const decoded = jwt.verify(token.toString(), SECRET_KEY);
        if (typeof decoded === "object" && decoded.hasOwnProperty("id")) {
          //@ts-ignore
          user = await prismaClient.user.findUnique({
            // @ts-ignore
            where: { id: decoded["id"] },
            select: {
              id: true,
              firstName: true,
              lastName: true,
              username: true,
              email: true,
            },
          });
        }
      }

      const context = {
        user,
      };
      return context;
    },
  });
  server.listen(PORT, () => {
    console.log(`🤗 Express server start with PORT ${PORT}`);
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
