"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destination = void 0;
class Destination {
    constructor(id, name, description, latitude, longitude) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    displayDetailsDestination() {
        console.log(`\nDestination ${this.id} : ${this.name}`);
        console.log(`Description : ${this.description}`);
        console.log(`Coordonnées : lat = ${this.latitude}, long = ${this.longitude}`);
    }
    getDetailsString() {
        return `Destination ${this.id} : ${this.name}\n` +
            `Description : ${this.description}\n` +
            `Coordonnées : lat = ${this.latitude}, long = ${this.longitude}`;
    }
}
exports.Destination = Destination;
