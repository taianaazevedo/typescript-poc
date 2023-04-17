import { movies, review } from "@prisma/client";
import prisma from "../config/database.js";

async function createMovie(newMovie: movies):Promise<movies> {
  return await prisma.movies.create({
    data: {
      name: newMovie.name,
      plataform: newMovie.plataform,
      genre: newMovie.genre,
      status: newMovie.status,
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
          { plataform: { contains: search } },
          { genre: { contains: search } },
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

async function getDuplicated(newMovie: movies):Promise<movies>{
    return await prisma.movies.findFirst({
        where: {
            name: newMovie.name
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
