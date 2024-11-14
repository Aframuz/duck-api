export class Duck {
    constructor(private id: number, private url: string) {}

    getId(): number {
        return this.id
    }
    
    getUrl(): string{
        return this.url
    }
}