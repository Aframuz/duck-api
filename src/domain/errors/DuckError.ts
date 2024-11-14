export class DuckError extends Error {
    constructor(message: string, public readonly code: number = 500) {
        super(message);
        this.name = "Holy Duck error"
    }
}