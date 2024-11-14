import { Router } from "express";
import { DuckController } from "../controllers/DuckController";

export const createDuckRouter = (duckController: DuckController): Router => {
    const router = Router();

    router.get("/random", (req, res) => duckController.getRandomDuck(req, res));
    router.get("/:id", (req, res) => duckController.getDucksByID(req, res));

    return router
}