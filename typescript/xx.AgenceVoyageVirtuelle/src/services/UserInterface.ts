// import * as readline from "readline";
// import { TravelManager } from "./TravelManager";

// export class UserInterface {
//     private rl: readline.Interface;
//     private travelManager: TravelManager;

//     constructor(travelManager: TravelManager) {
//         this.rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
//         this.travelManager = travelManager;
//     }

//     async showMainMenu(): Promise<void> {
//         console.log("\n--- Menu Principal ---");
//         console.log("1. Afficher la liste des destinations");
//         console.log("2. Rechercher une destination");
//         console.log("3. Quitter");

//         const answer = await this.question("Choisissez une option : ");
//         switch (answer) {
//             case '1':
//                 await this.showDestinationsList();
//                 break;
//             case '2':
//                 await this.searchDestination();
//                 break;
//             case '3':
//                 this.quit();
//                 return;
//             default:
//                 console.log("Option non valide. Veuillez réessayer.");
//         }
//         this.showMainMenu();
//     }

//     private async showDestinationsList(): Promise<void> {
//         console.log("\n--- Liste des Destinations ---");
//         const destinations = this.travelManager.getDestinationsList();
//         destinations.forEach((dest, index) => {
//             console.log(`${index + 1}. ${dest.Name}`);
//         });
//         await this.question("\nAppuyez sur Entrée pour revenir au menu principal.");
//     }

//     private async searchDestination(): Promise<void> {
//         const query = await this.question("Entrez le nom de la destination : ");
//         const results = await this.travelManager.searchDestination(query);
//         console.log("\nRésultats de la recherche :");
//         results.forEach((dest, index) => {
//             console.log(`${index + 1}. ${dest.Name}`);
//         });
//         await this.question("\nAppuyez sur Entrée pour revenir au menu principal.");
//     }

//     private quit(): void {
//         console.log("Merci d'avoir utilisé notre application. À bientôt !");
//         this.rl.close();
//     }

//     private question(query: string): Promise<string> {
//         return new Promise(resolve => this.rl.question(query, resolve));
//     }
// }