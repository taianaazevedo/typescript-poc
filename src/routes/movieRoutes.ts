import { Router } from "express";
import movieController from "../controllers/movieController.js";
import { validateSchema } from "../middlewares/validationMiddleware.js";
import { movieSchema, reviewSchema } from "../schemas/movieSchema.js";


const movieRoutes = Router()

movieRoutes.post("/", validateSchema(movieSchema), movieController.createMovie)
movieRoutes.post("/postreview", validateSchema(reviewSchema), movieController.postReview)
movieRoutes.get("/allmovies", movieController.getMovies)
movieRoutes.get("/", movieController.getMoviesByPlataform)
movieRoutes.patch("/", movieController.updateMovie)
movieRoutes.delete("/", movieController.deleteMovie)

export default movieRoutes