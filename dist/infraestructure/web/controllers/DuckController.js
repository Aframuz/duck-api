"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuckController = void 0;
const DuckError_1 = require("../../../domain/errors/DuckError");
class DuckController {
    constructor(getRandomDuckUseCase, getDucksByIDUseCase) {
        this.getRandomDuckUseCase = getRandomDuckUseCase;
        this.getDucksByIDUseCase = getDucksByIDUseCase;
    }
    async getRandomDuck(req, res) {
        try {
            const url = await this.getRandomDuckUseCase.execute();
            res.json({ url });
        }
        catch (error) {
            const duckError = error instanceof DuckError_1.DuckError ? error : new DuckError_1.DuckError("Internal server error", 500);
            res.status(duckError.code).json({ error: duckError.message });
        }
    }
    async getDucksByID(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                throw new DuckError_1.DuckError(`Invalid id parameter`, 400);
            }
            const urls = await this.getDucksByIDUseCase.execute(id);
            res.json({ urls });
        }
        catch (error) {
            const duckError = error instanceof DuckError_1.DuckError ? error : new DuckError_1.DuckError("Internal server error", 500);
            res.status(duckError.code).json({ error: duckError.message });
        }
    }
}
exports.DuckController = DuckController;
//# sourceMappingURL=DuckController.js.map