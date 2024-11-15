"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dependencyInjection_1 = require("./infraestructure/config/dependencyInjection");
const duckRoutes_1 = require("./infraestructure/web/routes/duckRoutes");
const app = (0, express_1.default)();
const { duckController } = (0, dependencyInjection_1.setupDependencies)();
//API info
app.get("/", (req, res) => {
    res.send('/api/ducks/random or /api/ducks/:id for cute ducks :)');
});
app.use("/api/ducks", (0, duckRoutes_1.createDuckRouter)(duckController));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map