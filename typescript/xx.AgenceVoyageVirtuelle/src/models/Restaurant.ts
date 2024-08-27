export class Restaurant {
    constructor(
        public readonly Id: string, 
        public readonly Name: string,
        public readonly Cuisine: string,
        public readonly Rating: number,
        public readonly PriceLevel: string,
    ) {}
}
