import { ILivre } from "./interfaces/ILivre";
import { Bibliotheque } from "./models/bibliotheque";
import { LivreLudique } from "./models/livreLudique";
import { LivreTechnique } from "./models/livreTechnique";

const livre1: LivreLudique = new LivreLudique(
  "Le seigneur des anneaux",
  "Jhon Doe",
  1954,
  "+10"
);

const livre2: LivreTechnique = new LivreTechnique(
  "Ts pour les nuls 🤯",
  "Tf_fullstack_python_2",
  2024,
  "informatique",
  "Débutants"
);

const livre3: LivreLudique = new LivreLudique(
  "Martine à la plage",
  "Jhon Doe",
  2004,
  "✔"
);

const livreLudique4: LivreLudique = new LivreLudique(
  "Martine à la plage - 2",
  "Jhon Doe",
  2004,
  "✔"
);

const livreTechnique1: LivreTechnique = new LivreTechnique(
  "Paradigne POO",
  "Microsoft",
  2007,
  "Informatique",
  "expert"
);

const bibliotheque: Bibliotheque = new Bibliotheque();

bibliotheque.Nom = "Bibliothèque centrale";

bibliotheque.AjouterLivre(livre1);
bibliotheque.AjouterLivre(livre2);
bibliotheque.AjouterLivre(livre3);
bibliotheque.AjouterLivre(livreLudique4);
bibliotheque.AjouterLivre(livreTechnique1);

// Affichage des livres
bibliotheque.AfficherLivres();

const nonLivreRecherche: string = "Martine à la plage";
const livreRecupere: ILivre | undefined =
  bibliotheque.ObtenirLivre(nonLivreRecherche);
if (livreRecupere) {
  livreRecupere?.AfficherLivre();
} else {
  console.log(`Le livre "${nonLivreRecherche}" n'existe pas...`);
}

// Suppresion d'un livre
bibliotheque.SupprimerLivre(nonLivreRecherche);

console.log("Affichage après suppression :");

bibliotheque.AfficherLivres();

// const test: ILivre = livreTechnique1;
// // const test2 : ILivre = livreLudique4;

// test.AfficherLivre();
