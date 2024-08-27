import { IDestination } from "../interfaces/IDestination";

export class Destination implements IDestination {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public latitude: number,
        public longitude: number,
    ) {}

    displayDetailsDestination(): void {
        console.log(`\nDestination ${this.id} : ${this.name}`);
        console.log(`Description : ${this.description}`);
        console.log(`Coordonnées : lat = ${this.latitude}, long = ${this.longitude}`);
    }

    getDetailsString(): string {
        return `Destination ${this.id} : ${this.name}\n` +
               `Description : ${this.description}\n` +
               `Coordonnées : lat = ${this.latitude}, long = ${this.longitude}`;
    }

}

