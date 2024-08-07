
### Dossier `/themes`

**index.ts : 
- Point central pour exporter tous les thèmes configurés dans le dossier.
- Importe `mainTheme` du fichier `main.ts` et l'exporte comme une propriété d'un objet.
=> Peut être utilisé pour centraliser et gérer plusieurs thèmes

**main.ts :**
- Importe `TailwindTheme` de `primereact/passtrough/tailwind` qui fournit une configuration de base de PrimeReact compatible avec Tailwind.
- Étendre cette configuration avec le *spread operator* `(... TailwindTheme)` = permet d'ajouter ou écraser des styles spécifiques pour personnaliser les composants PrimeReact en utilisant les classes Tailwind.

### Fichier `App.tsx` 

Composant racine qui encapsule toute l'application. 
- Utilise `QueryClientProvider` pour la gestion des requêtes avec React Query, `RouterProvider` pour la gestion du routage, et `UIProvider` qui pourrait potentiellement intégrer le système de thèmes ou d'autres contextes UI.

### Fichier `main.tsx` 

Importe les styles nécessaires pour PrimeReact, FontAwesone et les fichiers CSS personnalisés. 
=> C'est là que l'application est initialisée et rendue dans le DOM



### twMerge 

Fusionner les classes tailwind

```ts
import { type PrimeReactPTOptions } from "primereact/api";
import TailwindTheme from "primereact/passthrough/tailwind";
import { twMerge } from "tailwind-merge";

const baresthoTheme: PrimeReactPTOptions = {
  ...TailwindTheme,

  button: {
    root: {
      className: twMerge(TailwindTheme.button.root.className, "bg-blue-700 hover:bg-blue-200 rounded p-5 text-white"),
    },
  },

  menubar: {
    root: {
      className: twMerge(TailwindTheme.menubar.root.className, "bg-gray-100"),
    },
  },
};

export default baresthoTheme;
```


- Créer un fichier css
```css
/* src/styles/barestho-theme.css */
.bg-custom-menubar {
  @apply bg-gray-100 rounded;
}

.bg-custom-button {
  @apply bg-blue-700 hover:bg-blue-200 rounded p-5 text-white;
}
```

- barestho-theme.ts
```ts
import { type PrimeReactPTOptions } from "primereact/api";
import TailwindTheme from "primereact/passthrough/tailwind";
import { twMerge } from "tailwind-merge";

const baresthoTheme: PrimeReactPTOptions = {
  ...TailwindTheme,

  button: {
    root: {
      className: twMerge(TailwindTheme.button.root.className, "bg-custom-button"),
    },
  },

  menubar: {
    root: {
      className: twMerge(TailwindTheme.menubar.root.className, "bg-custom-menubar"),
    },
  },
};

export default baresthoTheme;
```


### Analyse du Banana Template

Le Banana Template est un modèle de projet React configuré pour fournir une structure de base robuste pour le développement d'applications web. Voici une analyse de sa structure et des composants clés :

#### Structure du Projet

1. **Public Directory**
    - Contient les fichiers publics, comme `index.html`, qui est le point d'entrée de l'application.
2. **Src Directory**
    - Contient l'essentiel du code source de l'application.
    - **assets** : Contient les fichiers statiques comme les images.
    - **Components** : Composants réutilisables de l'interface utilisateur.
    - **Layouts** : Composants de mise en page globaux (header, footer, sidebar).
	     `MainLayout` : Composant principal de mise en page incluant le header, le footer et les sidebars.
	     `AdminLayout` : Mise en page spécifique pour les sections administratives.
    - **Pages** : Différentes pages de l'application.
    - **Styles** : Fichiers de styles, généralement des fichiers CSS ou des modules CSS.
    - **Utils** : Fonctions utilitaires et helpers.
    - **Hooks** : Hooks React personnalisés pour la logique réutilisable.
    - **Services** : Pour l'interaction avec des APIs externes et à la logique de communication avec le backend.
    - **Routes** : Configuration des routes de l'application.
    - **Store** : Gère l'état global de l'application à l'aide de Redux ou d'un autre gestionnaire d'état.
    - **Utils** : Contient les utilitaires et fonctions auxiliaires réutilisables. 
    - **App.tsx** : Composant principal de l'application où les routes sont définies
    - **Main.tsx** : Point d'entrée de l'application, où ReactDom rend l'application
1. **Configuration**
    - Utilise `vite.config.js` pour configurer Vite, un bundler de module JavaScript.
    - Utilise `tailwind.config.js` pour configurer Tailwind CSS.

#### Composants Clés

1. **Layouts**
    
    - `MainLayout` : Composant principal de mise en page incluant le header, le footer et les sidebars.
    - `AdminLayout` : Mise en page spécifique pour les sections administratives.
2. **Components**
    
    - Composants UI réutilisables comme les boutons, les formulaires, les cartes, etc.
3. **Pages**
    
    - `Home` : Page d'accueil de l'application.
    - `Login` : Page de connexion.
    - `Register` : Page d'inscription.
    - `Dashboard` : Tableau de bord pour les utilisateurs connectés.