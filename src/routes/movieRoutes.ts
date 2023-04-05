import { Router } from "express";
import movieController from "../controllers/movieController.js";
import { validateSchema } from "../middlewares/validationMiddleware.js";
import { movieSchema, reviewSchema } from "../schemas/movieSchema.js";


const movieRoutes = Router()

movieRoutes.post("/", validateSchema(movieSchema), movieController.createMovie) //ok
movieRoutes.post("/postreview", validateSchema(reviewSchema), movieController.postReview)
movieRoutes.get("/allmovies", movieController.getMovies) //ok
movieRoutes.get("/", movieController.getMoviesByPlataform) 
movieRoutes.patch("/:id", movieController.updateMovie) //ok
movieRoutes.delete("/:id", movieController.deleteMovie) //ok

export default movieRoutes