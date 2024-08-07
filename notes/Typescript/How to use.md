

**Créer un composant : **

Je crée un composant par exemple CardUser qui va représenter la carte d'un utilisateur.
```tsx
const CardUser = () => {
	<p>Nom : </p>
	<p>Prénom : </p>
	<p>Age : </p>
}
```

Et je vais lui dire qu'il va devoir prendre des paramètres qui seront des propriétés (props) qu'on typera ensuite.
```tsx
const CardUser = (props) => {
	<p>Nom : </p>
	<p>Prénom : </p>
	<p>Age : </p>
}
```


**Créer le typage pour ce composant**

Pour typer des propriétés on utilise `type`. 
Le typage ressemble un peu à la construction d'un objet sauf qu'on ne lui définit pas des valeurs mais des types.
Et donc là on va dire que `CardUser` prend 3 attributs qui seront de typage différents.
`lastname`, `firstname`, `age`
```tsx
type CardUserType = {
	lastname: string;
	firstname: string;
	age: number
}
```

On spécifique maintenant que le composant va devoir utiliser les propriétés que l'on a créé en prenant en compte le type. 
```tsx
const CardUser = (props: CardUserType) => {
	<p>Nom : {props.lastname}</p>
	<p>Prénom : {props.firstname}</p>
	<p>Age : {props.age}</p>
}
```

**Utiliser le composant et fournir les valeurs attendues**

Maintenant que le composant est créé et que les attributs sont spécifiés avec un type on va pouvoir utiliser se composant et lui fournir les valeurs qu'il attend
```tsx
function App(){
	<CardUser firstname="Matteo" lastname="Di Vita" age={34} />
}
```


## Question : 

- Quelle est la différence entre RFCE, RAFCE, RAFCP
- La différence majeure encore un composant à flèche (arrow) et un composant à fonction
- Quel est la différence entre `type` et `interface` pour typer

## Tips :

Dans vscode : 

`ctrl + space` : ouvre l'autocomplétion qui permet de voir ce qu'attend le composant comme valeur
`clic droit sur un type` > `Rename symbol` ou `F2` : permet de renommer  