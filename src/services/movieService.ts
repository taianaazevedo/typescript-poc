import movieRepository from "../repositories/movieRepository.js"
import { Movie } from "../protocols/types.js"
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

async function updateMovie(){
    
}

async function postReview(){

}

async function deleteMovie(){
    
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