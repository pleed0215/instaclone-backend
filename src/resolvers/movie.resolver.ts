import { Query, Resolver } from "type-graphql";
import { Movie } from "@generated/type-graphql/models";
import { prismaClient } from "../prisma";
import { GetMoviesOutput } from "../dtos/common.dto";

@Resolver((of) => Movie)
export class MovieResolver {
  @Query((returns) => GetMoviesOutput)
  async getMovies(): Promise<GetMoviesOutput> {
    try {
      const movies = await prismaClient.movie.findMany();
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
  }
}
