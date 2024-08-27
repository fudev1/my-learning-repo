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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTravelAdvisor = void 0;
const axios_1 = __importDefault(require("axios"));
const destination_1 = require("../models/destination");
class getTravelAdvisor {
    static getTravelAdvisor(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get("${this.TRAV_ADV_URL}/locations/search", {
                    params: { query },
                    headers: {
                        "Content-Type": "application/json",
                        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                        "x-rapidapi-key": this.TRAV_ADV_API_KEY
                    }
                });
                // `response.data.data` contient le tableau de résultats de l'API
                // `.map((item:any) => ...)` permet de transformer chaque élément du tableau
                // pour chaque `item` dans le tableau, on crée un objet `Destination`
                // `new Destination(...)` crée cette instance en passant les arguments au constructeur
                // `item.result_object(...)` suppose que chaque item a une propriété `result_object` qui contient les données de l'item
                return response.data.data.map((item) => new destination_1.Destination(item.result_object.location_id, item.result_object.name, item.result_object.description || "", item.result_object.latitude, item.result_object.longitude, item.result_object.attractions || [], item.result_object.hotels || []));
            }
            catch (error) {
                console.error("Oups, il y a eu une erreur avec le getTravelAdvisor !", error);
                throw error;
            }
        });
    }
}
exports.getTravelAdvisor = getTravelAdvisor;
getTravelAdvisor.TRAV_ADV_API_KEY = "ae9c1c98ebmshc5f8ab2ee817fc2p151990jsn6040bf50b73c";
getTravelAdvisor.TRAV_ADV_URL = "https://travel-advisor.p.rapidapi.com";
