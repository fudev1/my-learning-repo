import axios from "axios";
import { Pokemon } from "./types";

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const POKE_SPECIES_API_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
const POKE_TYPE_API_URL = 'https://pokeapi.co/api/v2/type/';

export async function getPokemonInfo(name: string): Promise<Pokemon> {
    try {

        // Récupérer les infos générales du pokemon
        const response = await axios.get(`${POKE_API_URL}${name.toLowerCase()}`);
        const data = response.data;

        // Récupérer le nom en francais depuis le endpoint "species"
        // Filtrer les noms en francais
        const speciesResponse = await axios.get(`${POKE_SPECIES_API_URL}${data.species.name}`);
        const speciesData = speciesResponse.data;

        const frenchNameEntry = speciesData.names.find((n: any) => n.language.name === 'fr');
        const frenchName = frenchNameEntry ? frenchNameEntry.name : name;

        // Récupérer les infos sur les types du pokemon 
        const typesInFrench = await Promise.all(data.types.map(async (t: any) => {
            const typeResponse = await axios.get(`${POKE_TYPE_API_URL}${t.type.name}`);
            const typeData = typeResponse.data;

            const frenchTypeEntry = typeData.names.find((n: any) => n.language.name === 'fr');
            return {
                slot: t.slot,
                type: {
                    name: frenchTypeEntry ? frenchTypeEntry.name : t.type.name,
                }
            };
        }));

        const pokemon: Pokemon = {
            id: data.id,
            name: frenchName,
            height: data.height,
            weight: data.weight,
            types: typesInFrench
        }
        
        return pokemon;
        
    } catch (error: any) {
        throw new Error(`Erreur lors de la récupération du Pokémon '${name}': ${error.message}`);
    }
}


// async function main(){
//     const pokemonName : string = 'pikachu';

//     try{
//         const pokemon : Pokemon = await getPokemonInfo(pokemonName);
//         // Afficher les information du pokémon
//         console.log(`Id : ${pokemon.id}`);
//         console.log(`Nom : ${pokemon.name}`);
//         // Convertir les types en chaine de carctères
//         console.log(`Types : ${pokemon.types.map(t => t.type.name).join(', ')}`); 

//     } catch(error){
//         console.error(error);
//     }
// }
