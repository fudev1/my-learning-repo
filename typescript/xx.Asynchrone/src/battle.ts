import { Pokemon } from "./types";

// Comparer deux pokemon et déterminer le gagnant

function calculatePoints(pokemon1: Pokemon, pokemon2: Pokemon): number {
    let points = 0;

    if (pokemon1.weight > pokemon2.weight) points += 50;
    if (pokemon1.height > pokemon2.height) points += 30;
    if (pokemon1.types.length > pokemon2.types.length) points += 20;

    return points;
}

export function battle(pokemon1: Pokemon, pokemon2: Pokemon): string {
    const pokemon1Points = calculatePoints(pokemon1, pokemon2);
    const pokemon2Points = calculatePoints(pokemon2, pokemon1);

    if (pokemon1Points > pokemon2Points) {
        return pokemon1.name; 
    } else if ( pokemon2Points > pokemon1Points) {
        return pokemon2.name;
    } else {
        return "Egalité";
    }
}