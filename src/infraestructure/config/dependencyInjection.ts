import { DuckRepository } from "../repositories/DuckRepository";
import { GetRandomDuckUseCase } from "../../application/use-cases/GetRandomDuckUseCase";
import { GetDucksByIDUseCase } from "../../application/use-cases/GetDucksByIDUseCase";
import { DuckController } from "../web/controllers/DuckController";

interface Dependencies {
    duckController: DuckController;
}

export function setupDependencies(): Dependencies {
    const duckRepository = new DuckRepository();
    const getRandomDuckUseCase = new GetRandomDuckUseCase(duckRepository);
    const getDucksByIDUseCase = new GetDucksByIDUseCase(duckRepository);
    const duckController = new DuckController(getRandomDuckUseCase, getDucksByIDUseCase);

    return { duckController };
}