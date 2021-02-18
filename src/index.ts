import { prisma, PrismaClient } from "@prisma/client";
import { ApolloServer, gql } from "apollo-server";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/../.env" });

const PORT: number = Number(process.env.PORT) || 3000;

const client = new PrismaClient();

interface CreateMovieInput {
  title: string;
  genre?: string;
  year: number;
}

interface UpdateMovieInput extends CreateMovieInput {
  id: number;
}

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    year: Int!
    genre: String
    createdAt: String!
    updatedAt: String!
  }

  type Result {
    ok: Boolean!
    error: String
    movie: Movie
    movies: [Movie]
  }

  type Query {
    getMovies: Result
    getMovie(id: Int!): Result
  }

  type Mutation {
    createMovie(title: String!, year: Int!, genre: String): Result!
    deleteMovie(id: Int!): Result!
    updateMovie(id: Int!, title: String, year: Int, genre: String): Result!
  }
`;

const resolvers = {
  Query: {
    getMovies: async () => {
      try {
        const movies = await client.movie.findMany();
        return {
          ok: true,
          movies,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        };
      }
    },
    getMovie: async (_, { id }) => {
      try {
        const movie = await client.movie.findUnique({ where: { id } });
        if (movie) {
          return {
            ok: true,
            movie,
          };
        } else {
          throw new Error("Error on finding movie");
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        };
      }
    },
  },
  Mutation: {
    createMovie: (_, { title, year, genre }: CreateMovieInput) => {
      const movie = client.movie.create({ data: { title, year, genre } });

      return {
        ok: true,
        error: null,
        movie,
      };
    },
    deleteMovie: async (_, { id }) => {
      try {
        const result = await client.movie.delete({ where: { id } });

        return {
          ok: true,
          error: null,
        };
      } catch (e) {
        return {
          ok: false,
          error: e.message,
        };
      }
    },
    updateMovie: async (_, { id, title, year, genre }: UpdateMovieInput) => {
      try {
        const movie = client.movie.update({
          where: {
            id,
          },
          data: {
            title,
            year,
            genre,
          },
        });

        if (movie) {
          return {
            ok: true,
            movie,
          };
        } else {
          throw new Error("Update failed");
        }
      } catch (e) {
        return {
          ok: false,
          error: e.message,
        };
      }
    },
  },
};

const main = async () => {
  //const server = createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
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
    await client.$disconnect();
  });
