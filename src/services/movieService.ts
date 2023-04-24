import movieRepository from "../repositories/movieRepository";
import errors from "../errors/index";
import { movies, review } from "@prisma/client";
import { Movie } from "../repositories/movieRepository";

async function createMovie(newMovie: Movie):Promise<Movie> {
  const duplicated = await movieRepository.getDuplicated(newMovie.name);

  if (duplicated) throw errors.duplicated(errors);

  return await movieRepository.createMovie(newMovie);
}

async function getMovies(): Promise<movies[]> {
  const allmovies = await movieRepository.getMovies();

  if (allmovies.length === 0) throw errors.notFoundError();

  return allmovies;
}

async function updateMovie(id: number):Promise<void> {
  const movie = await movieRepository.getMovieById(id);

  if (!movie) throw errors.notFoundError();

  await movieRepository.updateMovie(id);
}

async function postReview(id: number, newReview: review):Promise<review> {
  const movieExist = await movieRepository.getMovieById(id);

  if (!movieExist) throw errors.notFoundError();

  return await movieRepository.postReview(id, newReview);
}

async function deleteMovie(id: number):Promise<void> {
  const movieExist = await movieRepository.getMovieById(id);

  if (!movieExist) throw errors.notFoundError();

  await movieRepository.deleteMovie(id);
}

async function getMoviesByPlataformOrGenre(search: string):Promise<movies[]> {
  const moviesFound = await movieRepository.getMoviesByPlataformOrGenre(search);

  if (!moviesFound) throw errors.notFoundError();

  return moviesFound;
}

export default {
  createMovie,
  getMovies,
  updateMovie,
  postReview,
  deleteMovie,
  getMoviesByPlataformOrGenre,
};
