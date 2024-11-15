"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDuckRouter = void 0;
const express_1 = require("express");
const createDuckRouter = (duckController) => {
    const router = (0, express_1.Router)();
    router.get("/random", (req, res) => duckController.getRandomDuck(req, res));
    router.get("/:id", (req, res) => duckController.getDucksByID(req, res));
    return router;
};
exports.createDuckRouter = createDuckRouter;
//# sourceMappingURL=duckRoutes.js.map