import movieRepository from "../repositories/movieRepository.js"
import { Movie, Review } from "../protocols/types.js"
import errors from "../errors/index.js"

async function createMovie(newMovie: Movie){
    const {rowCount} = await movieRepository.getDuplicated(newMovie)
    if(rowCount) throw errors.duplicated(errors)

   return await movieRepository.createMovie(newMovie)
}

async function getMovies(){
    const {rows, rowCount } = await movieRepository.getMovies()
    if(!rowCount) throw errors.notFoundError()    

    return rows
}

async function updateMovie(id: number, newReview: Review){
    const {rowCount} = await movieRepository.getMovieById(id)
    if(!rowCount) throw errors.notFoundError()

    await movieRepository.updateMovie(id, newReview)   
}

async function postReview(newReview: Review){

}

async function deleteMovie(id: number){
    const {rowCount} = await movieRepository.getMovieById(id)
    if(!rowCount) throw errors.notFoundError()

    await movieRepository.deleteMovie(id)   
    
}

async function getMoviesByPlataform(){
    
}

export default {
    createMovie,
    getMovies,
    updateMovie,
    postReview,
    deleteMovie,
    getMoviesByPlataform
}