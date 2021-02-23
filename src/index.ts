import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
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
import { customAuthChecker } from "./auth/auth.checker";
import express from "express";
import logger from "morgan";
import * as bodyParser from "body-parser";

dotenv.config({ path: __dirname + "/../.env" });

const PORT: number = Number(process.env.PORT) || 3000;

let schema: GraphQLSchema;

const app = express();

const main = async () => {
  const { typeDefs, resolvers: appResolvers } = await buildTypeDefsAndResolvers(
    {
      resolvers: [__dirname + "/**/*.resolver.{ts,js}"],
      authChecker: customAuthChecker,
    }
  );
  // resolvers, and types, made from app
  const appSchema = makeExecutableSchema({ typeDefs, resolvers: appResolvers });

  // resolvers from prisma
  schema = await buildSchema({
    resolvers,
    validate: false,
    authChecker: customAuthChecker,
  });
  const totalSchema = stitchSchemas({ subschemas: [appSchema, schema] });

  const server = new ApolloServer({
    schema: totalSchema,
    playground: true,
    // authentication part.
    context: async ({ req }): Promise<Context> => {
      const token = req.headers["x-jwt"];
      let user: User | null = null;

      if (token) {
        try {
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
        } catch {
          user = null;
        }
      }
      const context = {
        user,
      };

      return context;
    },
  });

  app.use(logger("tiny"));
  app.use("/static", express.static("uploads"));
  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () => {
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
