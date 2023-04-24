import { movies, review } from "@prisma/client";
import prisma from "../config/database";

export type Movie = Omit<movies, "id" | "status">


async function createMovie(newMovie: Movie):Promise<Movie> {
  return await prisma.movies.create({
    data: {
      name: newMovie.name,
      plataform: newMovie.plataform,
      genre: newMovie.genre
    },
  });
}

async function getMovies():Promise<movies[]> {
  const moviesFound = await prisma.movies.findMany();

  return moviesFound
}

async function updateMovie(id: number):Promise<void> {
  await prisma.movies.update({
    where: {
      id,
    },
    data: {
      status: true,
    },
  });
}

async function postReview(id: number, newReview: review):Promise<review>{
  return await prisma.review.create({
    data: {
      movie_id: id,
      comment: newReview.comment,
      rate: newReview.rate,
    },
  });
}

async function deleteMovie(id: number):Promise<void> {
  await prisma.movies.delete({
    where: {
      id,
    },
  });
}

async function getMoviesByPlataformOrGenre(search: string):Promise<movies[]> {
  return await prisma.movies.findMany({
    where: {
        OR: [
          { plataform: { contains: search, mode: 'insensitive' } },
          { genre: { contains: search, mode: 'insensitive'} },
        ],
      }
  });
}

async function getMovieById(id: number):Promise<movies> {
    return await prisma.movies.findFirst({
        where: {
            id
        }
    })
}

async function getDuplicated(newMovie: string):Promise<movies>{
    return await prisma.movies.findFirst({
        where: {
            name: newMovie
        }
    })
}

export default {
  createMovie,
  getMovies,
  updateMovie,
  deleteMovie,
  getMoviesByPlataformOrGenre,
  getDuplicated,
  getMovieById,
  postReview,
};
