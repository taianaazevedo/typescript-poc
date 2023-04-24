import { Router } from "express";
import movieController from "../controllers/movieController";
import { validateSchema } from "../middlewares/validationMiddleware";
import { movieSchema, reviewSchema } from "../schemas/movieSchema";


const movieRoutes = Router()

movieRoutes.post("/", validateSchema(movieSchema), movieController.createMovie)
movieRoutes.get("/allmovies", movieController.getMovies)
movieRoutes.get("/", movieController.getMoviesByPlataformOrGenre)
movieRoutes.patch("/:id", movieController.updateMovie)
movieRoutes.post("/:id", validateSchema(reviewSchema), movieController.postReview) 
movieRoutes.delete("/:id", movieController.deleteMovie)

export default movieRoutes