"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelManager = void 0;
const ApiTravelAdvisor_1 = require("./api/ApiTravelAdvisor");
class TravelManager {
    constructor() {
        this.destinations = [];
    }
    loadDestinations() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.destinations = yield ApiTravelAdvisor_1.ApiTravelAdvisor.getDestinations("paris");
                console.log("Destinations chargées !");
            }
            catch (error) {
                console.error("erreur chargement des destinations !", error);
            }
        });
    }
    getDestinationsList() {
        return this.destinations;
    }
    searchDestination(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiTravelAdvisor_1.ApiTravelAdvisor.getDestinations(query);
            }
            catch (error) {
                console.error("erreur lors de la recherche !", error);
                throw error;
            }
        });
    }
}
exports.TravelManager = TravelManager;
