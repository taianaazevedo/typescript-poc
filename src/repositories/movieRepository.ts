import { db } from "../config/database.js";
import { Movie } from "../protocols/types.js"

async function createMovie(newMovie: Movie){
    await db.query(`
    INSERT INTO movies (name, plataform, genre)
    VALUES ($1, $2, $3)    
    `, [newMovie.name, newMovie.plataform, newMovie.genre])
}

async function getMovies(){
    return await db.query(`
        SELECT * FROM movies
    `)
}

async function updateMovie(id: number){
    return await db.query(`
        UPDATE movies
        SET status = true
        WHERE id = $1
    `, [id])    
}

async function postReview(){

}

async function deleteMovie(id: number){
    return await db.query(`
        DELETE FROM movies
        WHERE id = $1
    `, [id])
    
}

async function getMoviesByPlataform(){
    
}

async function getMovieById(id: number){
    return await db.query(`
        SELECT * FROM movies
        WHERE id = $1
    `, [id])
}

async function getDuplicated(newMovie: Movie){
    return await db.query(`
        SELECT * FROM movies 
        WHERE name = $1       
    `, [newMovie.name])
    
}

export default {
    createMovie,
    getMovies,
    updateMovie,
    postReview,
    deleteMovie,
    getMoviesByPlataform,
    getDuplicated,
    getMovieById
}