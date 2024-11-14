import { IDuckRepository } from "../../domain/repositories/IDuckRespository";
import { DuckError } from "../../domain/errors/DuckError";
import { error } from "console";

export class GetDucksByIDUseCase {
    constructor(private readonly duckrepository: IDuckRepository) {}

    async execute(id: number): Promise<string[]> {
        try {
            const ducks = await this.duckrepository.getDucksByID(id);
            
            if (!ducks.length){
                throw new error;
            }

            return ducks.map(duck => duck.getUrl());
        } catch (error) {
            throw new DuckError("Failed to get ducks with id " + id, 500);
        }
    }
}