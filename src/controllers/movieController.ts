import { NextFunction, Request, Response } from "express"
import movieService from "../services/movieService.js"
import { Movie, Query, Review } from "../protocols/types.js"


async function createMovie(req: Request, res: Response, next: NextFunction){
    const newMovie = req.body as Movie

    try {
        await movieService.createMovie(newMovie)

        return res.sendStatus(201)
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
    const id: number = +req.params.id
  
    try {
        await movieService.updateMovie(id)

        return res.sendStatus(200)        
    } catch (error) {
        next(error)
    }
    
}


async function postReview(req: Request, res: Response, next: NextFunction){
    const id: number = +req.params.id
    const newReview = req.body as Review
    try {
        await movieService.postReview(id, newReview)

        return res.sendStatus(200)        
    } catch (error) {
        next(error)
    }
}


async function deleteMovie(req: Request, res: Response, next: NextFunction){
    const id: number = +req.params.id
    try {
        await movieService.deleteMovie(id)

        return res.sendStatus(200)        
    } catch (error) {
        next(error)
    }
    
}

async function getMoviesByPlataformOrGenre(req: Request, res: Response, next: NextFunction){
    const query = req.query.query as Query
    try {
        const result = await movieService.getMoviesByPlataformOrGenre(query)

        return res.send(result).status(200)
    } catch (error) {
        console.log(error)
        next(error)
    }
    
}

export default {
    createMovie,
    getMovies,
    updateMovie,
    deleteMovie,
    postReview,
    getMoviesByPlataformOrGenre
}