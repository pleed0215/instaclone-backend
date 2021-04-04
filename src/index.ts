import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import * as dotenv from "dotenv";
import http from "http";

import "reflect-metadata";

import { resolvers } from "./generated";
import { buildSchema, buildTypeDefsAndResolvers } from "type-graphql";
import { Context } from "vm";
import { GraphQLSchema } from "graphql";
import { prismaClient } from "./prisma";
import { stitchSchemas } from "graphql-tools";
import * as jwt from "jsonwebtoken";
import { SECRET_KEY } from "./utils";
import { User } from "./generated";
import { customAuthChecker } from "./auth/auth.checker";
import express from "express";
import logger from "morgan";
import cors from "cors";

import { pubsub } from "./pubsub";

dotenv.config({ path: __dirname + "/../.env" });

const PORT: number = Number(process.env.PORT) || 3000;
let schema: GraphQLSchema;
const app = express();
const httpServer = http.createServer(app);

const main = async () => {
  const { typeDefs, resolvers: appResolvers } = await buildTypeDefsAndResolvers(
    {
      resolvers: [__dirname + "/src/resolvers/**/*.resolvers.{ts,js}"],
      pubSub: pubsub,
      authChecker: customAuthChecker,
    }
  );
  // resolvers, and typedefs, made from app
  const appSchema = makeExecutableSchema({ typeDefs, resolvers: appResolvers });

  // resolvers & typedefs from prisma
  schema = await buildSchema({
    resolvers,
    authChecker: customAuthChecker,
  });
  const totalSchema = stitchSchemas({ subschemas: [appSchema, schema] });

  const server = new ApolloServer({
    schema: appSchema,
    introspection: true,
    playground: true,
    // authentication part.
    context: async ({ req, connection }): Promise<Context> => {
      const token = req ? req.headers["x-jwt"] : connection?.context["x-jwt"];
      let user: User | null = null;
      //?
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
                avatar: true,
              },
            });
          }
        } catch {
          user = null;
        }
      }
      const context = {
        user,
        prisma: prismaClient,
      };

      return context;
    },
  });

  app.use(logger("tiny"));
  app.use("/static", express.static("uploads"));
  app.use(cors());
  server.applyMiddleware({ app });
  server.installSubscriptionHandlers(httpServer);

  httpServer.listen({ port: PORT }, () => {
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
