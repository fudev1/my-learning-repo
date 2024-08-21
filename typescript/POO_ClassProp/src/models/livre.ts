export class Livre {
    // Attributs (_ pour mettre en "privé")
    // ça va générer une erreur de compilation (constructeur non défini)
    // mettre le ! pour forcer le compilateur à générer un constructeur
    private _Titre!: string;

    // le ? permet de forcer le compilateur à générer un constructeur
    // non obligatoire d'avoir une valeur par défaut
    public Auteur?: string;

    private _AnneePublication!: number;

    // ===============================================
    // Prop's

    // (`set`) => Ecriture seule pour le titre
    // (équivalent à getter / setter en python)
    set Titre(titre: string) {
        this._Titre = titre
    }

    get Titre(): string {
        return this._Titre;
    }

    // (`get`) => Lecture seule pour l'année de publication
    get AnneePublication(): number {
        return this._AnneePublication;
    }

    // ===============================================
    // Méthodes
    // Comportements logique à notre class 
    // La rendre plus dynamique et fonctionnelle pour la logique 

    afficherLivre(): void {
        console.log(`description: \n ${this._Titre} - \n Auteur: ${this.Auteur} - \n Année de publication: ${this._AnneePublication}`);
    }

    







}