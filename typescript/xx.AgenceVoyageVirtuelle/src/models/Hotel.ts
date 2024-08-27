export class Hotel {
    constructor(
        public readonly Id: string,
        public readonly Name: string,
        public readonly Rating: number,
        public readonly PriceLevel: string,
    ) {}
}