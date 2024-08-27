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
exports.ApiTravelAdvisor = void 0;
const axios_1 = __importDefault(require("axios"));
const Destination_1 = require("../../models/Destination");
class ApiTravelAdvisor {
    static getDestinationsInfo(query_1) {
        return __awaiter(this, arguments, void 0, function* (query, limit = 5) {
            try {
                const response = yield axios_1.default.get(`${this.BASE_URL}/locations/search`, {
                    params: { query, limit },
                    headers: {
                        "Content-Type": "application/json",
                        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                        "x-rapidapi-key": this.API_KEY
                    }
                });
                if (!response.data.data || !Array.isArray(response.data.data)) {
                    throw new Error("Format de réponse inattendu de l'API");
                }
                return response.data.data
                    .filter((item) => item.result_type === "geos")
                    .map((item) => {
                    const obj = item.result_object;
                    return new Destination_1.Destination(obj.location_id.toString(), obj.name || "", obj.geo_description || "", parseFloat(obj.latitude) || 0, parseFloat(obj.longitude) || 0);
                });
            }
            catch (error) {
                console.error("Oups, il y a eu une erreur avec le getTravelAdvisor !", error);
                throw error;
            }
        });
    }
}
exports.ApiTravelAdvisor = ApiTravelAdvisor;
ApiTravelAdvisor.API_KEY = "ae9c1c98ebmshc5f8ab2ee817fc2p151990jsn6040bf50b73c";
ApiTravelAdvisor.BASE_URL = "https://travel-advisor.p.rapidapi.com";
