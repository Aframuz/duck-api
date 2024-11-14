import express from "express";
import { setupDependencies } from "./infraestructure/config/dependencyInjection";
import { createDuckRouter } from "./infraestructure/web/routes/duckRoutes";

const app = express();
const { duckController } = setupDependencies();

//API info
app.get("/", (req, res) => {
    res.send('/api/ducks/random or /api/ducks/:id for cute ducks :)')
})

app.use("/api/ducks", createDuckRouter(duckController));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})