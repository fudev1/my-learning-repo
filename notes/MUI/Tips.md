

```jsx
const [mode, setMode] = useState(true);

const toggleModeFunction = () => {
	setMode(!mode)
}
```

- Cette méthode passe directement la nouvelle valeur à l'état en inversant l'état actuel
- Tu prends l'état actuel de (`state`), tu l'inverses (si c'était `true`, ça devient `false`), puis tu mets à jour l'état avec cette valeur
- **Problème :** si la mise à jour est effectuée plusieurs fois rapidement ou dans des contextes complexes ou l'état n'est pas synchronisé comme prévu. 


```jsx
const [state, setState] = useState(true);

const toggleModeFunction = () => {
	setState((prevMode) => !prevMode)
}
```

- Passe la fonction à `setState` au lieu de lui donner une valeur directement.
- Cette fonction reçoit l'état précédent (`prevMode`) et retourne la nouvelle valeur de l'état
- React garantit que tu reçois la valeur la plus récente de l'état puis tu inverses cette valeur

**Premier cas :**
Tu es en train de compter des personnes qui entrent et sortent d'une pièce.
Tu notes le nombre de personnes sur un papier. 
Deux personnes entrent et sortent avant que tu n'aies le temps de mettre à jour ton papier.
==> Risque de faire des erreurs dans ton comptage

**Second cas :**
Tu ajoutes un assistant qui vérifie toujours la valeur actuelle sur le papier avant de le mettre à jour. 
