import { IDuckRepository } from "../../domain/repositories/IDuckRespository";
import { DuckError } from "../../domain/errors/DuckError";

export class GetDucksByIDUseCase {
    constructor(private readonly duckrepository: IDuckRepository) {}

    async execute(id: number): Promise<string[]> {
        try {
            const ducks = await this.duckrepository.getDucksByID(id);
            return ducks.map(duck => duck.getUrl());
        } catch (error) {
            throw new DuckError("Failed to get ducks with id " + id, 500);
        }
    }
}