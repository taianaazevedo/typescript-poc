import { db } from "../config/database.js";
import { Movie, Query, Review } from "../protocols/types.js"

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

async function updateMovie(id: number, newReview: Review){
    await db.query(`
        UPDATE movies
        SET status = true
        WHERE id = $1
    `, [id])  
    
    await db.query(`
        INSERT INTO review (rate, comment, movie_id)
        VALUES ($1, $2, $3)
    `, [newReview.rate, newReview.comment, id])
}


async function deleteMovie(id: number){
    return await db.query(`
        DELETE FROM movies
        WHERE id = $1
    `, [id])
    
}

async function getMoviesByPlataformOrGenre(query: Query){
    return await db.query(`
        SELECT COUNT(*) FROM movies
        WHERE LOWER (plataform) LIKE ($1) OR LOWER (genre) LIKE ($1)
    `, [`%${query}%`])
    
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
    deleteMovie,
    getMoviesByPlataformOrGenre,
    getDuplicated,
    getMovieById
}