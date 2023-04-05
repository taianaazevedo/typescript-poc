import { NextFunction, Request, Response } from "express"
import movieService from "../services/movieService.js"
import { Movie } from "../protocols/types.js"

async function createMovie(req: Request, res: Response, next: NextFunction){
    const newMovie = req.body as Movie

    try {
        const result = await movieService.createMovie(newMovie)

        return res.send(result)
    } catch (error) {
        next(error)
    }
}

async function getMovies(req: Request, res: Response, next: NextFunction){
    try {
        const result = await movieService.getMovies()

        return res.send(result)
    } catch (error) {
        next(error)
    }
    
}

async function updateMovie(req: Request, res: Response, next: NextFunction){
    try {
        
    } catch (error) {
        next(error)
    }
    
}

async function postReview(req: Request, res: Response, next: NextFunction){
      try {
        
    } catch (error) {
        next(error)
    }

}

async function deleteMovie(req: Request, res: Response, next: NextFunction){
    try {
        
    } catch (error) {
        next(error)
    }
    
}

async function getMoviesByPlataform(req: Request, res: Response, next: NextFunction){
    try {
        
    } catch (error) {
        next(error)
    }
    
}

export default {
    createMovie,
    getMovies,
    updateMovie,
    postReview,
    deleteMovie,
    getMoviesByPlataform
}