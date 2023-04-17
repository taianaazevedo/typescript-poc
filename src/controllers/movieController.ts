import { NextFunction, Request, Response } from "express";
import movieService from "../services/movieService.js";
import { movies, review } from "@prisma/client";
import { Search } from "../protocols/types.js";

async function createMovie(req: Request, res: Response, next: NextFunction) {
  const newMovie = req.body as movies;

  try {
    await movieService.createMovie(newMovie);

    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

async function getMovies(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await movieService.getMovies();

    return res.send(result);
  } catch (error) {
    next(error);
  }
}

async function updateMovie(req: Request, res: Response, next: NextFunction) {
  const id: number = +req.params.id;

  try {
    await movieService.updateMovie(id);

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

async function postReview(req: Request, res: Response, next: NextFunction) {
  const id: number = +req.params.id;
  const newReview = req.body as review;
  try {
    const reviewByClient = await movieService.postReview(id, newReview);

    return res.status(200).send(reviewByClient);
  } catch (error) {
    console.log(error)
    next(error);
  }
}

async function deleteMovie(req: Request, res: Response, next: NextFunction) {
  const id: number = +req.params.id;
  try {
    await movieService.deleteMovie(id);

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

async function getMoviesByPlataformOrGenre(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { search } = req.query as Search;
  try {
    const result = await movieService.getMoviesByPlataformOrGenre(search);

    return res.send(result).status(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export default {
  createMovie,
  getMovies,
  updateMovie,
  deleteMovie,
  postReview,
  getMoviesByPlataformOrGenre,
};
