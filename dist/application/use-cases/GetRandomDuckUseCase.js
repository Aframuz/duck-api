"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRandomDuckUseCase = void 0;
const DuckError_1 = require("../../domain/errors/DuckError");
class GetRandomDuckUseCase {
    constructor(duckRepository) {
        this.duckRepository = duckRepository;
    }
    async execute() {
        try {
            const duck = await this.duckRepository.getRandomDuck();
            return duck.getUrl();
        }
        catch (error) {
            throw new DuckError_1.DuckError("Failed to get random duck", 500);
        }
    }
}
exports.GetRandomDuckUseCase = GetRandomDuckUseCase;
//# sourceMappingURL=GetRandomDuckUseCase.js.map