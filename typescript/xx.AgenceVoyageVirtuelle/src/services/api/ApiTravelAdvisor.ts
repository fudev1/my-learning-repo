import axios from "axios";
import { Destination } from "../../models/Destination";

export class ApiTravelAdvisor {

    private static readonly API_KEY = "ae9c1c98ebmshc5f8ab2ee817fc2p151990jsn6040bf50b73c";
    private static readonly BASE_URL = "https://travel-advisor.p.rapidapi.com";

    static async getDestinationsInfo(query: string, limit: number = 5): Promise<Destination[]> {

        try {
            const response = await axios.get(`${this.BASE_URL}/locations/search`, {
                params: { query, limit },
                headers: {
                    "Content-Type": "application/json",
                    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                    "x-rapidapi-key": this.API_KEY
                }
            });

            if (!response.data.data || !Array.isArray(response.data.data)) {
                throw new Error("Format de réponse inattendu de l'API");
            }

            return response.data.data
                .filter((item: any) => item.result_type === "geos")
                .map((item: any) => {
                    const obj = item.result_object;
                    return new Destination(
                        obj.location_id.toString(), 
                        obj.name || "",
                        obj.geo_description || "",
                        parseFloat(obj.latitude) || 0,
                        parseFloat(obj.longitude) || 0
                    );
                });
            
        } catch (error) {
            console.error("Oups, il y a eu une erreur avec le getTravelAdvisor !", error);
            throw error;
        }
    }
}




