# Structure du projet


./interfaces/   …     Contiendra les définitions des interfaces TS
./models/       …     Classes principales qui représentent les objets de l'application
./services/     …     Classes responsables de l'intégration avec les APIs
./utils/        …     Fonctions utilitaires (gestion menu, etc)
./errors/       …     Gestion des erreur (ex: PrixInvalidError)
./controllers/  …     Fonction qui gérent les interactions entre les services, les modèles et l'ui console

app.ts          …     Point d'entrée de l'application
config.ts       …     Configuration générale (clé API, URL, ets)

## CLASSES & OBJETS
### MODELS 

- Voyage : Classe implémentant l'interface IVoyage
    - Methodes =>
        - constructor : initialiser un voyage
        - getDescription : récupérer la description du voyage

- Client : Classe implémentant l'interface IClient
    - Methodes =>
        - addReservation : ajouter une réservation au client
        - getReservations : lister les réservations du client

- Reservation : Classe implémentant l'interface IReservation
    - Methodes =>
        - getDetails : récupérer les détails de la réservation

### SERVICES 
- TravelAdvisorService : intéraction avec l'API Travel Advisor
    - Methodes =>
        - searchVoyages(query: string): Promise<IVoyage[]> : recherche une destination
        - getRestaurants(locationId: string): Promise<IRestaurant[]> : recherche resto à une destination spécifique
        - getActivities(locationId: string): Promise<IActivity[]> : recherche activités à une destination spécifique

- WeatherService : intéraction avec l'API Weather
    - Methodes =>
        - getWeather(latitude: number, longitude: number): promise<IWeather> : récupérer la météo à une position donnée

## Utilities 
- MenuUtils : gère le menu de l'application
    - Methodes =>
        - displayMenu() : affiche le menu
        - displayPagination()

## Controllers
- VoyageController : gère les interactions entre les services et les modèles
    - Methodes =>
        - searchAndDisplayVoyages(query: string) : gère la recherche et affiche les voyages trouvés
        - displayVoyageDetails(voyageId) : affiche les détails d'un voyage

- ClientController : gère les interactions entre les services et les modèles
    - Methodes =>
        - createClient() : gère la création d'un client
        - makeReservation() : gère la réservation d'un voyage pour un client

## INTERFACES POO

- IVoyage : Réprésentera une destination de voyage
    - id
    - name : nom de la destination
    - location : chaine qui représente la localisation (ex : "Paris, France")
    - latitude : latitude de la destination
    - longitude : longitude de la destination
    - description : description de la destination (optionnelle)

- IClient : Réprésentera un client
    - id
    - firstname
    - lastname
    - email
    - phone
    - reservations : liste des voyages réservés par le client

- IReservation : Réprésentera un voyage réservé par un client
    - id
    - voyage : référence vers la destination
    - client : référence vers le client
    - date : date de réservation

## ERRORS

Gérer les erreurs (try/catch) pour s'assurer que l'application ne plante pas et renvoie un message d'erreur