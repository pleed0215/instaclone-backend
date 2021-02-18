import { ApolloServer, gql } from "apollo-server";
import * as dotenv from "dotenv";

import "reflect-metadata";

import { resolvers } from "@generated/type-graphql";
import { buildSchema } from "type-graphql";
import { Context } from "vm";
import { GraphQLSchema } from "graphql";
import { MovieResolver } from "./resolvers/movie";
import { prismaClient } from "./prisma";

dotenv.config({ path: __dirname + "/../.env" });

const PORT: number = Number(process.env.PORT) || 3000;

let schema: GraphQLSchema;

const main = async () => {
  schema = await buildSchema({
    resolvers: [MovieResolver, ...resolvers],
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    playground: true,
    context: (): Context => ({ prismaClient }),
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
