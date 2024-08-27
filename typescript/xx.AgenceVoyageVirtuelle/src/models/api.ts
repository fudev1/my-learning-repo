import axios from "axios";

async function getTravelAdvisor(): Promise<any> {
    try {
        const response = await axios.get("https://travel-advisor.p.rapidapi.com/locations/search", {
            params: {
                query: "paris",
            },
            headers: {
                "Content-Type": "application/json",
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                "x-rapidapi-key": "ae9c1c98ebmshc5f8ab2ee817fc2p151990jsn6040bf50b73c"
            }
        });

        console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error("Oups, il y a eu une erreur avec le getTravelAdvisor !", error);
    }
}

getTravelAdvisor();


