import { Router } from "express";
import movieController from "../controllers/movieController.js";
import { validateSchema } from "../middlewares/validationMiddleware.js";
import { movieSchema, reviewSchema } from "../schemas/movieSchema.js";


const movieRoutes = Router()

movieRoutes.post("/", validateSchema(movieSchema), movieController.createMovie)
movieRoutes.get("/allmovies", movieController.getMovies)
movieRoutes.get("/", movieController.getMoviesByPlataformOrGenre)
movieRoutes.patch("/:id", movieController.updateMovie)
movieRoutes.post("/:id", validateSchema(reviewSchema), movieController.postReview) 
movieRoutes.delete("/:id", movieController.deleteMovie)

export default movieRoutes