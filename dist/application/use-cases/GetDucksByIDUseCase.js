"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDucksByIDUseCase = void 0;
const DuckError_1 = require("../../domain/errors/DuckError");
const console_1 = require("console");
class GetDucksByIDUseCase {
    constructor(duckrepository) {
        this.duckrepository = duckrepository;
    }
    async execute(id) {
        try {
            const ducks = await this.duckrepository.getDucksByID(id);
            if (!ducks.length) {
                throw new console_1.error;
            }
            return ducks.map(duck => duck.getUrl());
        }
        catch (error) {
            throw new DuckError_1.DuckError("Failed to get ducks with id " + id, 500);
        }
    }
}
exports.GetDucksByIDUseCase = GetDucksByIDUseCase;
//# sourceMappingURL=GetDucksByIDUseCase.js.map