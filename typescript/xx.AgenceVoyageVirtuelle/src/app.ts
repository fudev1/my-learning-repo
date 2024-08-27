import { Destination } from "./models/destination";


const pattaya = new Destination(
    1,
    "Pattaya",
    "Ville de l'est de Thaïlande située à environ 100 km de Bangkok",
    13.73, 100.51,
    ["Beauté", "Thé", "Vie", "La vie en fleur", "Les fleurs de la vie"],
    [{name: "Le Ritz", rating: 5}, {name: "La Plage", rating: 4}]
)

pattaya.displayDetailsDestination();