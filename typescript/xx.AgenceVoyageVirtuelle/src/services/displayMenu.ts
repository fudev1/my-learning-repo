// import { Destination } from "../models/Destination";

// const readline = require("node:readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const destination = new Destination(1, "Pattaya", "Ville de l'est de Thaïlande située à environ 100 km de Bangkok", 13.73, 100.51, ["Beauté", "Thé", "Vie", "La vie en fleur", "Les fleurs de la vie"], [{ name: "Le Ritz", rating: 5 }, { name: "La Plage", rating: 4 }]);

// export function displayMenu(){
//     console.clear();
//     console.log("Travel Manager Company".padStart(40, "test"));
//     console.log("(1). Voir la liste des destinations");
//     console.log("(2). Rechercher une destination");
//     console.log("(3). Enregistrer un nouveau Client");
//     console.log("(Q) Quitter\n");

//     rl.question("\nChoisir une option: ", (choix: string) => {
//         // trim() supprime les espaces à la fin et au début du choix
//         switch (choix.trim().toUpperCase()) {
//             case "1": 
//                 destination.displayDetailsDestination();
//                 break;
//             case "2":
//                 console.log("Recherche");
//                 break;
//             case "3":
//                 console.log("Enregistrement");
//                 break;
//             case "Q":
//                 console.log("Arrêt du programme");
//                 break;
//             default:
//                 console.log("Option non valide");
//                 displayMenu();
//         }
//     })
// }

// export function displayDestination(destination: Destination, page: number = 1) {
//     const itemsParPage = 10;
//     const totalPages = Math.ceil(destination.length / itemsParPage);
// }