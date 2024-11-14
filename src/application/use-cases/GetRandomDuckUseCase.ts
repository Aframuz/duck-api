import { IDuckRepository } from "../../domain/repositories/IDuckRespository";
import { DuckError } from "../../domain/errors/DuckError";

export class GetRandomDuckUseCase {
    constructor(private readonly duckRepository: IDuckRepository) {}

    async execute(): Promise<string> {
        try {
            const duck = await this.duckRepository.getRandomDuck();
            return duck.getUrl();
        } catch (error) {
            throw new DuckError("Failed to get random duck", 500);
        }
    }
}