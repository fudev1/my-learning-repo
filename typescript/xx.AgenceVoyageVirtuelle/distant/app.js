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
const ApiTravelAdvisor_1 = require("./services/api/ApiTravelAdvisor");
// import { TravelManager } from "./services/TravelManager";
const readline = __importStar(require("readline"));
class TravelApp {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.clearScreen();
            yield this.showMainMenu();
        });
    }
    clearScreen() {
        console.clear();
    }
    showMainMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            this.clearScreen();
            this.drawInterface("MENU DU TRAVEL MANAGER", [
                "1. Lister les destinations",
                "2. Rechercher une destination",
                "3. Enregistrer un Client"
            ]);
            const answer = yield this.question("Choisissez une option : ");
            switch (answer) {
                case '1':
                    yield this.listDestinations();
                    break;
                case '2':
                    yield this.searchDestinations();
                    break;
                case '3':
                    yield this.registerClient();
                    break;
                case 'q':
                    this.quit();
                    return;
                default:
                    this.drawContent("Option non valide. Veuillez réessayer.");
                    yield this.showMainMenu();
            }
        });
    }
    listDestinations() {
        return __awaiter(this, void 0, void 0, function* () {
            // Ici, vous devriez implémenter la logique pour lister les destinations
            this.drawContent("Liste des destinations non implémentée.");
            yield this.returnToMenu();
        });
    }
    searchDestinations() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.question("Entrez le nom d'une destination : ");
            console.log(`Recherche de destinations pour "${query}"...`);
            try {
                const destinations = yield ApiTravelAdvisor_1.ApiTravelAdvisor.getDestinationsInfo(query);
                if (destinations.length === 0) {
                    this.drawContent("Aucune destination trouvée.");
                }
                else if (destinations.length === 1) {
                    this.drawContent("Destination trouvée :\n" + destinations[0].getDetailsString());
                }
                else {
                    let content = `${destinations.length} destinations trouvées :\n`;
                    destinations.forEach((dest, index) => {
                        content += `${index + 1}. ${dest.name}\n`;
                    });
                    this.drawContent(content);
                    const choice = yield this.question("Choisissez une destination (numéro) : ");
                    const index = parseInt(choice) - 1;
                    if (index >= 0 && index < destinations.length) {
                        this.drawContent("Détails de la destination choisie :\n" + destinations[index].getDetailsString());
                    }
                    else {
                        this.drawContent("Choix invalide.");
                    }
                }
            }
            catch (error) {
                this.drawContent("Une erreur est survenue lors de la recherche : " + error);
            }
            yield this.returnToMenu();
        });
    }
    registerClient() {
        return __awaiter(this, void 0, void 0, function* () {
            // Ici, vous devriez implémenter la logique pour enregistrer un client
            this.drawContent("Enregistrement de client non implémenté.");
            yield this.returnToMenu();
        });
    }
    returnToMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.question("Appuyez sur Entrée pour revenir au menu principal...");
            yield this.showMainMenu();
        });
    }
    quit() {
        console.log("Merci d'avoir utilisé notre application. Au revoir !");
        this.rl.close();
    }
    question(query) {
        return new Promise((resolve) => this.rl.question(query, resolve));
    }
    drawInterface(title, menuItems) {
        console.log("┌────────────────────────────────────────────────────────────────┐");
        console.log("│ LOGO                                                           │");
        console.log("├────────────────────────────────────────────────────────────────┤");
        console.log(`│ ${title.padEnd(68)}│`);
        menuItems.forEach(item => {
            console.log(`│ ${item.padEnd(68)}│`);
        });
        console.log("├────────────────────────────────────────────────────────────────┤");
        console.log("│                                                                │");
        console.log("│                                                                │");
        console.log("│                                                                │");
        console.log("│                                                                │");
        console.log("│                                                                │");
        console.log("├────────────────────────────────────────────────────────────────┤");
        console.log("│ INPUT:                                                         │");
        console.log("├────────────────────────────────────────────────────────────────┤");
        console.log("│ (Q) pour quitter - (<- ou -> pour naviguer) - (ESC) pour retour│");
        console.log("└────────────────────────────────────────────────────────────────┘");
    }
    drawContent(content) {
        const lines = content.split('\n');
        this.clearScreen();
        this.drawInterface("", []); // Redessine l'interface
        console.log("\x1B[7A"); // Remonte de 7 lignes
        lines.forEach((line, index) => {
            if (index < 5) { // Limite à 5 lignes pour cet exemple
                console.log(`│ ${line.padEnd(68)}│`);
            }
        });
        console.log("\x1B[" + (9 - lines.length) + "B"); // Descend pour positionner le curseur correctement
    }
}
// Lancement de l'application
const app = new TravelApp();
app.start().catch(console.error);
