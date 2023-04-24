import { Router } from "express";
import movieRoutes from "./movieRoutes";

const routes = Router()

routes.use("/movies", movieRoutes)

export default routes