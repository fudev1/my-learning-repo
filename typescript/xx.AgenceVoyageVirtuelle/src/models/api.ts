import axios from "axios";
import { Destination } from "../models/destination";

export class getTravelAdvisor {

    private static readonly TRAV_ADV_API_KEY = "ae9c1c98ebmshc5f8ab2ee817fc2p151990jsn6040bf50b73c";
    private static readonly TRAV_ADV_URL = "https://travel-advisor.p.rapidapi.com";

    static async getTravelAdvisor(query: string): Promise<Destination[]> {

        try {
            const response = await axios.get("${this.TRAV_ADV_URL}/locations/search", {
                params: { query },
                headers: {
                    "Content-Type": "application/json",
                    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                    "x-rapidapi-key": this.TRAV_ADV_API_KEY
                }
            });

            // `response.data.data` contient le tableau de résultats de l'API
            // `.map((item:any) => ...)` permet de transformer chaque élément du tableau
            // pour chaque `item` dans le tableau, on crée un objet `Destination`
            // `new Destination(...)` crée cette instance en passant les arguments au constructeur
            // `item.result_object(...)` suppose que chaque item a une propriété `result_object` qui contient les données de l'item
            
            return response.data.data.map((item: any) => new Destination(
                item.result_object.location_id,
                item.result_object.name,
                item.result_object.description || "",
                item.result_object.latitude,
                item.result_object.longitude,
                item.result_object.attractions || [],
                item.result_object.hotels || []

            ));
            
        } catch (error) {
            console.error("Oups, il y a eu une erreur avec le getTravelAdvisor !", error);
            throw error;
        }
    }
}




