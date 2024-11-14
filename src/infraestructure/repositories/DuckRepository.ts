import { Duck } from "../../domain/entities/Duck";
import { IDuckRepository } from "../../domain/repositories/IDuckRespository";
import { DuckError } from "../../domain/errors/DuckError";

interface ResponseData {
    gifs: string[]; 
    images: string[]; 
}


export class DuckRepository implements IDuckRepository {
    private readonly apiURL = process.env.API_URL || "https://random-d.uk/api/list";

    async getAllDucks(): Promise<Duck[]> {
        try {
            const res = await fetch(this.apiURL)

            if (!res.ok) {
                throw new DuckError(`Error on API call! status: ${res.status}`, res.status);
            }
            
            const data = await res.json() as ResponseData;

            const duckIDs = [...data.gifs, ...data.images]

            return duckIDs.map(id => {
                const numberID: number = parseInt(id.match(/\d+/)[0])
                return new Duck(numberID, `https://random-d.uk/api/${id}`)
            })
        } catch (error) {
            if (error instanceof DuckError) {
                throw error;
            }
            throw new DuckError(`Failed to fetch ducks from API`, 500)
        }
    }

    async getDucksByID(id: number): Promise<Duck[]> {
        try {
            const ducks = await this.getAllDucks();
            return ducks.filter(duck => duck.getId() === id);
        } catch(error) {
            if (error instanceof DuckError) {
                throw error
            }
            throw new DuckError(`Failed to fetch ducks by id`, 500)
        }
    }

    async getRandomDuck(): Promise<Duck> {
        try {
            const ducks = await this.getAllDucks();

            const randn = Math.floor(Math.random() * ducks.length);
            return ducks[randn];
        } catch(error) {
            if (error instanceof DuckError) {
                throw error
            }
            throw new DuckError(`Failed to fetch random duck`, 500)
        }
    }
}