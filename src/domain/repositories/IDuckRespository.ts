import { Duck } from "../entities/Duck"

export interface IDuckRepository {
    getAllDucks(): Promise<Duck[]>;
    getDucksByID(id: number): Promise<Duck[]>;
    getRandomDuck(): Promise<Duck>;
}