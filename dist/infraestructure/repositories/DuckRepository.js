"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuckRepository = void 0;
const Duck_1 = require("../../domain/entities/Duck");
const DuckError_1 = require("../../domain/errors/DuckError");
class DuckRepository {
    constructor() {
        this.apiURL = process.env.API_URL || "https://random-d.uk/api/list";
    }
    async getAllDucks() {
        try {
            const res = await fetch(this.apiURL);
            if (!res.ok) {
                throw new DuckError_1.DuckError(`Error on API call! status: ${res.status}`, res.status);
            }
            const data = await res.json();
            const duckIDs = [...data.gifs, ...data.images];
            return duckIDs.map(id => {
                const numberID = parseInt(id.match(/\d+/)[0]);
                return new Duck_1.Duck(numberID, `https://random-d.uk/api/${id}`);
            });
        }
        catch (error) {
            if (error instanceof DuckError_1.DuckError) {
                throw error;
            }
            throw new DuckError_1.DuckError(`Failed to fetch ducks from API`, 500);
        }
    }
    async getDucksByID(id) {
        try {
            const ducks = await this.getAllDucks();
            return ducks.filter(duck => duck.getId() === id);
        }
        catch (error) {
            if (error instanceof DuckError_1.DuckError) {
                throw error;
            }
            throw new DuckError_1.DuckError(`Failed to fetch ducks by id`, 500);
        }
    }
    async getRandomDuck() {
        try {
            const ducks = await this.getAllDucks();
            const randn = Math.floor(Math.random() * ducks.length);
            return ducks[randn];
        }
        catch (error) {
            if (error instanceof DuckError_1.DuckError) {
                throw error;
            }
            throw new DuckError_1.DuckError(`Failed to fetch random duck`, 500);
        }
    }
}
exports.DuckRepository = DuckRepository;
//# sourceMappingURL=DuckRepository.js.map