"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDependencies = setupDependencies;
const DuckRepository_1 = require("../repositories/DuckRepository");
const GetRandomDuckUseCase_1 = require("../../application/use-cases/GetRandomDuckUseCase");
const GetDucksByIDUseCase_1 = require("../../application/use-cases/GetDucksByIDUseCase");
const DuckController_1 = require("../web/controllers/DuckController");
function setupDependencies() {
    const duckRepository = new DuckRepository_1.DuckRepository();
    const getRandomDuckUseCase = new GetRandomDuckUseCase_1.GetRandomDuckUseCase(duckRepository);
    const getDucksByIDUseCase = new GetDucksByIDUseCase_1.GetDucksByIDUseCase(duckRepository);
    const duckController = new DuckController_1.DuckController(getRandomDuckUseCase, getDucksByIDUseCase);
    return { duckController };
}
//# sourceMappingURL=dependencyInjection.js.map