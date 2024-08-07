**Utilisation :**
Permet de rendre disponible des données et/ou des fonctions dans toute l'application.

Sans React Context, il est possible de le faire en passant par les props d'un parent à son enfant. Mais si on a une architecture avec un parent qui a un enfant qui a lui même un enfant, qui a lui même un enfant .... 

![[Pasted image 20240709232531.png]]
=> On appelle ça le **prop drilling** (passer au plus bas des props à travers plusieurs couches de composants quand il y en a plusieurs d'entre eux qui n'utiliseront même pas cette props)

Context existe donc pour éviter le prop drilling.

## Cas d'usage : 

Une famille dans une maison où l'on a le père, le fils, le petit fils, et l'arrière petit fils. 

**Avec le prop drilling :**
Le père souhaite donner les clés de la voiture familiale à l'arrière petit fils. Pour cela, il doit donner les clé à son fils, qui va devoir les donner au petit fils qui les donnera enfin à l'arrière petit fils. 

**avec Context :**
Le père pose les clés de la voiture dans le salon et celui qui a besoin des clés n'aura qu'a les récupérer. 
Les clés sont dispo pour tout le monde, sans passer par un intermédiaire. 
Mais il faudra les demander avant de les prendre. 

![[Pasted image 20240709233259.png]]

## Mettre en place un context (dark mode)

3 étapes principales : 
- Créer le *context*
- Englober l'app dans le context créé
- Récupérer les données/fonctions de notre context

### Créer le context 

Pour créer un *context* il suffit d'utiliser la commande : **`export const DarKModeContext = createContext();`**
💡Attention : Cette commande doit se trouver en dehors de nos composants. (= fichier externe)

```jsx
➡️ // DarkModeProvider.jsx

import {createContext} from 'React'

export const DarkModeContext = createContext();

// Début du composant :
export default function DarkModeProvider() {
	return(
		<div></div>
	)
}

```

Créer une variable `darkmode` qui aura pour valeur `true` ou `false` afin de savoir si le dark mode est activé. 
Ajouter une fonction qui permet de switcher entre ces deux valeurs. 
**💡 => Utiliser le hook *useState***

```jsx
import {createContext, useState} from 'React'

export const DarkModeContext = createContext();

export default function DarkModeProvider() {
	const [darkMode, setDarkMode] = useState(false);

	function toggleDarkMode() => {
		setDarkMode((prevMode) => !prevMode);
	}

	return(
		<div></div>
	)

}
```

On init `darkMode` à `false` pour dire que le site utilisera le light mode par défaut. 
La fonction `toggleDarkMode()` permet à chaque clic sur le bouton d'inverser le statut du mode.
**💡 => Transmettre cette fonction au bouton**

### Englober l'app dans le context créé

 Deux étapes pour englober l'app dans le context. (On peut dire qu'on fournit un context à l'app)

1 : Englober le composant `App` par le composant `DarkModeProvider`

```jsx
➡️ // index.js

import DarkModeProvider from './provider/DarkModeProvider';

const root = REACTDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<DarkModeProvider>
			<App />
		</DarkModeProvider>
	</React.StrictMode>
);
```

```jsx
➡️ // DarkModeProvider.js
import {createContext, useState} from 'React'

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode() => {
		setDarkMode((prevMode) => !prevMode)
	}

	return(
		<DarkModeContext.Provider>
			{children} // correspond au composant <App/>
		</DarkModeContext.Provider>
	)
}
```

On a rendu le context disponible mais comment Context sait qu'il doit mettre telle ou telle donnée à disposition ? 
Il faut les ajouter en tant que valeur en ajoutant un objet avec ce que l'on souhaite faire passer.

```jsx
➡️ // DarkModeProvider.js

return(
	<DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
		{children}
	</DarkModeContext.Provider>

)
```

### Récupérer les données/fonctions du context

Lorsqu'on souhaite obtenir quelque chose, on doit le demander gentiment.. Cela fait partie des bonnes manières.
Pour obtenir ce que l'on souhaite, on doit utiliser le hook ***useContext***
Il va permettre d'utiliser ce que *Context* a rendu disponible.

**`const {darkMode, toggleDarkMode} = useContext(DarkModeContext);`**

```jsx
import {useContext} from 'React';
import {DarkModeContext} from './provider/DarkModeProvider'

export default function ToggleButton() {
	const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
	console.log(darkMode);

	return(
		<button onClick={toggleDarkMode}>Toggle</button>
	)
}
```

```jsx
import { useContext } from 'React';
import { DarkModeContext } from './provider/DarkModeProvider';

export default function App(){
	const {darkMode} = useContext(DarkModeContext);

	return(
		<div className={`app ${darkMode && 'dark-theme'}`}
			<Content />
		</div>
	)
}
```