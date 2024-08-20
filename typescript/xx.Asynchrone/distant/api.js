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
exports.getPokemonInfo = getPokemonInfo;
const axios_1 = __importDefault(require("axios"));
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const POKE_SPECIES_API_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
const POKE_TYPE_API_URL = 'https://pokeapi.co/api/v2/type/';
function getPokemonInfo(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Récupérer les infos générales du pokemon
            const response = yield axios_1.default.get(`${POKE_API_URL}${name.toLowerCase()}`);
            const data = response.data;
            // Récupérer le nom en francais depuis le endpoint "species"
            // Filtrer les noms en francais
            const speciesResponse = yield axios_1.default.get(`${POKE_SPECIES_API_URL}${data.species.name}`);
            const speciesData = speciesResponse.data;
            const frenchNameEntry = speciesData.names.find((n) => n.language.name === 'fr');
            const frenchName = frenchNameEntry ? frenchNameEntry.name : name;
            // Récupérer les infos sur les types du pokemon 
            const typesInFrench = yield Promise.all(data.types.map((t) => __awaiter(this, void 0, void 0, function* () {
                const typeResponse = yield axios_1.default.get(`${POKE_TYPE_API_URL}${t.type.name}`);
                const typeData = typeResponse.data;
                const frenchTypeEntry = typeData.names.find((n) => n.language.name === 'fr');
                return {
                    slot: t.slot,
                    type: {
                        name: frenchTypeEntry ? frenchTypeEntry.name : t.type.name,
                    }
                };
            })));
            const pokemon = {
                id: data.id,
                name: frenchName,
                height: data.height,
                weight: data.weight,
                types: typesInFrench
            };
            return pokemon;
        }
        catch (error) {
            throw new Error(`Erreur lors de la récupération du Pokémon '${name}': ${error.message}`);
        }
    });
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
