import { ApiTravelAdvisor } from "./services/api/ApiTravelAdvisor";
// import { TravelManager } from "./services/TravelManager";
import * as readline from 'readline';

class TravelApp {
    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async start() {
        this.clearScreen();
        await this.showMainMenu();
    }

    private clearScreen() {
        console.clear();
    }

    private async showMainMenu() {
        this.clearScreen();
        this.drawInterface("MENU DU TRAVEL MANAGER", [
            "1. Lister les destinations",
            "2. Rechercher une destination",
            "3. Enregistrer un Client"
        ])

        const answer = await this.question("Choisissez une option : ");

        switch (answer) {
            case '1':
                await this.listDestinations();
                break;
            case '2':
                await this.searchDestinations();
                break;
            case '3':
                await this.registerClient();
                break;
            case 'q':
                this.quit();
                return;
            default:
                this.drawContent("Option non valide. Veuillez réessayer.");
                await this.showMainMenu();
        }
    }

    private async listDestinations() {
        // Ici, vous devriez implémenter la logique pour lister les destinations
        this.drawContent("Liste des destinations non implémentée.");
        await this.returnToMenu();
    }

    private async searchDestinations() {
        const query = await this.question("Entrez le nom d'une destination : ");
        console.log(`Recherche de destinations pour "${query}"...`);

        try {
            const destinations = await ApiTravelAdvisor.getDestinationsInfo(query);
            if (destinations.length === 0) {
                this.drawContent("Aucune destination trouvée.");
            } else if (destinations.length === 1) {
                this.drawContent("Destination trouvée :\n" + destinations[0].getDetailsString());
            } else {
                let content = `${destinations.length} destinations trouvées :\n`;
                destinations.forEach((dest, index) => {
                    content += `${index + 1}. ${dest.name}\n`;
                });
                this.drawContent(content);
                
                const choice = await this.question("Choisissez une destination (numéro) : ");
                const index = parseInt(choice) - 1;
                if (index >= 0 && index < destinations.length) {
                    this.drawContent("Détails de la destination choisie :\n" + destinations[index].getDetailsString());
                } else {
                    this.drawContent("Choix invalide.");
                }
            }
        } catch (error) {
            this.drawContent("Une erreur est survenue lors de la recherche : " + error);
        }

        await this.returnToMenu();
    }

    private async registerClient() {
        // Ici, vous devriez implémenter la logique pour enregistrer un client
        this.drawContent("Enregistrement de client non implémenté.");
        await this.returnToMenu();
    }

    private async returnToMenu() {
        await this.question("Appuyez sur Entrée pour revenir au menu principal...");
        await this.showMainMenu();
    }

    private quit() {
        console.log("Merci d'avoir utilisé notre application. Au revoir !");
        this.rl.close();
    }

    private question(query: string): Promise<string> {
        return new Promise((resolve) => this.rl.question(query, resolve));
    }

    private drawInterface(title: string, menuItems: string[]) {
        console.log("┌────────────────────────────────────────────────────────────────┐");
        console.log("│ LOGO                                                           │");
        console.log("├────────────────────────────────────────────────────────────────┤");
        console.log(`│ ${title.padEnd(68)}│`);
        menuItems.forEach(item => {
            console.log(`│ ${item.padEnd(68)}│`);
        });
        console.log("├────────────────────────────────────────────────────────────────┤");
        console.log("│                                                                │");
        console.log("│                                                                │");
        console.log("│                                                                │");
        console.log("│                                                                │");
        console.log("│                                                                │");
        console.log("├────────────────────────────────────────────────────────────────┤");
        console.log("│ INPUT:                                                         │");
        console.log("├────────────────────────────────────────────────────────────────┤");
        console.log("│ (Q) pour quitter - (<- ou -> pour naviguer) - (ESC) pour retour│");
        console.log("└────────────────────────────────────────────────────────────────┘");
    }

    private drawContent(content: string) {
        const lines = content.split('\n');
        this.clearScreen();
        this.drawInterface("", []); // Redessine l'interface
        console.log("\x1B[7A"); // Remonte de 7 lignes
        lines.forEach((line, index) => {
            if (index < 5) { // Limite à 5 lignes pour cet exemple
                console.log(`│ ${line.padEnd(68)}│`);
            }
        });
        console.log("\x1B[" + (9 - lines.length) + "B"); // Descend pour positionner le curseur correctement
    }
}


// Lancement de l'application
const app = new TravelApp();
app.start().catch(console.error);