// import { Destination } from "../models/Destination";
// import { ApiTravelAdvisor } from "./api/ApiTravelAdvisor";

// export class TravelManager {
//     private destinations: Destination[] = [];

//     async loadDestinations(): Promise<void> {
//         try {
//             this.destinations = await ApiTravelAdvisor.getDestinations("paris");
//             console.log("Destinations chargées !");
        
//         } catch (error) {
//             console.error("erreur chargement des destinations !", error);
//         }
//     }

//     getDestinationsList(): Destination[] {
//         return this.destinations;
//     }

//     async searchDestination(query: string): Promise<Destination[]> {
//         try {
//             return await ApiTravelAdvisor.getDestinations(query);
//         } catch (error) {
//             console.error("erreur lors de la recherche !", error);
//             throw error;
//         }
//     }
// }