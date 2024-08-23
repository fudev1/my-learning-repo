import { ILivre } from "./interfaces/ILivre";
import { Bibliotheque } from "./models/bibliotheque";
import { LivreLudique } from "./models/livreLudique";
import { LivreTechnique } from "./models/livreTechnique";

const livre1: LivreLudique = new LivreLudique();
livre1.Titre = "Le seigneur des anneaux";
livre1.AnneePublication = 1954;
livre1.Auteur = "Tolkien";

const livre2: LivreTechnique = new LivreTechnique();
livre2.Titre = "Ts pour les nuls 🤯";
livre2.AnneePublication = 2024;
livre2.Auteur = "Tf_fullstack_python_2";
livre2.Domaine = "informatique";
livre2.Niveau = "Débutants";

const livre3: LivreLudique = new LivreLudique();
livre3.Titre = "Martine à la plage";
livre3.AnneePublication = 2004;
livre3.Auteur = "Jhon Doe";
livre3.PublicCible = "✔";

const livreLudique4: LivreLudique = new LivreLudique();
livreLudique4.Titre = "Martine à la plage - 2";
livreLudique4.AnneePublication = 2004;
livreLudique4.Auteur = "Jhon Doe";
livreLudique4.PublicCible = "✔";

const livreTechnique1: LivreTechnique = new LivreTechnique();
livreTechnique1.Titre = "Paradigne POO";
livreTechnique1.AnneePublication = 2007;
livreTechnique1.Auteur = "Microsoft";
livreTechnique1.Domaine = "Informatique";
livreTechnique1.Niveau = "expert";

const bibliotheque: Bibliotheque = new Bibliotheque();

bibliotheque.Nom = "Bibliothèque centrale";

bibliotheque.AjouterLivre(livre1);
bibliotheque.AjouterLivre(livre2);
bibliotheque.AjouterLivre(livre3);
bibliotheque.AjouterLivre(livreLudique4);
bibliotheque.AjouterLivre(livreTechnique1);

// Affichage des livres
// bibliotheque.AfficherLivres();

// const nonLivreRecherche : string = "Martine à la plage";
// const livreRecupere : Livre | undefined = bibliotheque.ObtenirLivre(nonLivreRecherche);
// if (livreRecupere){
//     livreRecupere?.AfficherLivre()
// }else{
//     console.log(`Le livre "${nonLivreRecherche}" n'existe pas...`);
// }

// // Suppresion d'un livre
// bibliotheque.SupprimerLivre(nonLivreRecherche);

// console.log("Affichage après suppression :");

// bibliotheque.AfficherLivres();
console.clear();
const test: ILivre = livreTechnique1;
// const test2 : ILivre = livreLudique4;

test.AfficherLivre();
