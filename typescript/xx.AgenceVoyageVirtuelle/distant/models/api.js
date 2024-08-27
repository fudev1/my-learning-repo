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
const axios_1 = __importDefault(require("axios"));
function getTravelAdvisor() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get("https://travel-advisor.p.rapidapi.com/locations/search", {
                params: {
                    query: "paris",
                },
                headers: {
                    "Content-Type": "application/json",
                    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                    "x-rapidapi-key": "ae9c1c98ebmshc5f8ab2ee817fc2p151990jsn6040bf50b73c"
                }
            });
            console.log(JSON.stringify(response.data, null, 2));
        }
        catch (error) {
            console.error("Oups, il y a eu une erreur avec le getTravelAdvisor !", error);
        }
    });
}
getTravelAdvisor();
