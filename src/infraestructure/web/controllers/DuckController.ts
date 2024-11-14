import { Request, Response } from "express";
import { GetRandomDuckUseCase } from "../../../application/use-cases/GetRandomDuckUseCase";
import { GetDucksByIDUseCase } from "../../../application/use-cases/GetDucksByIDUseCase";
import { DuckError } from "../../../domain/errors/DuckError";

export class DuckController {
    constructor(private readonly getRandomDuckUseCase: GetRandomDuckUseCase, private readonly getDucksByIDUseCase: GetDucksByIDUseCase) {}

    async getRandomDuck(req: Request, res: Response): Promise<void> {
        try {
            const url = await this.getRandomDuckUseCase.execute();
            res.json( { url });
        } catch (error) {
            const duckError = error instanceof DuckError ? error : new DuckError("Internal server error", 500);
            res.status(duckError.code).json({ error: duckError.message })
        }
    }

    async getDucksByID(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                throw new DuckError(`Invalid id parameter`, 400);
            }
            const urls = await this.getDucksByIDUseCase.execute(id);
            res.json({ urls });
        } catch(error) {
            const duckError = error instanceof DuckError ? error : new DuckError("Internal server error", 500);
            res.status(duckError.code).json({ error: duckError.message })
        }
    }
}