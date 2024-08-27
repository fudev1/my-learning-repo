"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.UserInterface = void 0;
const readline = __importStar(require("readline"));
class UserInterface {
    constructor(travelManager) {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.travelManager = travelManager;
    }
    showMainMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("\n--- Menu Principal ---");
            console.log("1. Afficher la liste des destinations");
            console.log("2. Rechercher une destination");
            console.log("3. Quitter");
            const answer = yield this.question("Choisissez une option : ");
            switch (answer) {
                case '1':
                    yield this.showDestinationsList();
                    break;
                case '2':
                    yield this.searchDestination();
                    break;
                case '3':
                    this.quit();
                    return;
                default:
                    console.log("Option non valide. Veuillez réessayer.");
            }
            this.showMainMenu();
        });
    }
    showDestinationsList() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("\n--- Liste des Destinations ---");
            const destinations = this.travelManager.getDestinationsList();
            destinations.forEach((dest, index) => {
                console.log(`${index + 1}. ${dest.Name}`);
            });
            yield this.question("\nAppuyez sur Entrée pour revenir au menu principal.");
        });
    }
    searchDestination() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.question("Entrez le nom de la destination : ");
            const results = yield this.travelManager.searchDestination(query);
            console.log("\nRésultats de la recherche :");
            results.forEach((dest, index) => {
                console.log(`${index + 1}. ${dest.Name}`);
            });
            yield this.question("\nAppuyez sur Entrée pour revenir au menu principal.");
        });
    }
    quit() {
        console.log("Merci d'avoir utilisé notre application. À bientôt !");
        this.rl.close();
    }
    question(query) {
        return new Promise(resolve => this.rl.question(query, resolve));
    }
}
exports.UserInterface = UserInterface;
