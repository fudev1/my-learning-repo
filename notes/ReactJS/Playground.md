
### **Props**

```jsx
"""
- Je déclare une fonction pour créer un composant custom de Button.
- Je passe des `props` au Button
- Je `spread` les props pour utiliser
- Resultat : Le composant peut recevoir le props `superbutton` avec une valeur `string`
"""

function Button(props) {
    console.log(props)

    return <button className='btn btn-primary' {...props}>Hello</button>
}


export default function Component() {
    return (
        <Button superbutton="super" />
    )
}
```

![[Pasted image 20240723113930.png]]

```jsx
// Résultat console : 
<button class="btn btn-primary" superbutton="super">Hello</button>
```

---

```jsx
"""
- Je déclare une fonction pour créer un composant custom de Button.
- Je passe des `props` au Button
- Je concatène mon objet `className` pour aller chercher la `props` que je passerais dans le composant
- Resultat : Le composant peut recevoir le props `className`
"""

function Button(props) {
    console.log(props)

    return <button className={'btn btn-primary ' + props.className} >Hello</button>
}


export default function Component() {
    return (
        <Button className="btn-wide" />
    )
}
```

![[Pasted image 20240723134611.png]]

```jsx
// Résultat console : 
<button class="btn btn-primary btn-wide">Hello</button>
```

--- 

### **Children**

Je souhaite passer du texte à mon composant custom. 
J'utilise une *props 'text'* mais ce n'est pas propre, c'est pourquoi **children** existe.

```jsx
function Button(props) {
    console.log(props)

    return <button className={'btn btn-primary ' + props.className} >{props.text}</button>
}


export default function Component() {
    return (
        <Button className="btn-wide" text="je suis super" />
    )
}
```

![[Pasted image 20240723135912.png]]

=> en passant un texte directement dans le composant `Button` on se rend compte que React passe un élement *children*

```jsx
function Button(props) {
    console.log(props)

    return <button className={'btn btn-primary ' + props.className}>{props.children}</button>
}


export default function Component() {
    return (
        <Button className="btn-wide">Je suis Children </Button>
    )
}
```

=> L'avantage de *children* c'est qu'on peut en passer plusieurs. On va pouvoir donc pouvoir passer plusieurs éléments différents :

- `"String"`
- `<Composant size={12} />`
- `{ javascript } => CODE JS
- => Ajouter **{ }** c'est **pour passer du JS, imagine que c'est comme une porte de Narnia** pour rentrer dans le monde du JS
- => Sinon la valeur est de type String : 

```jsx
<Button className="btn-wide">
	<AutreComponent size={23} /> // Composant 
	Je suis un texte             // String
	alert("test")                // String => Pour du js alors ouvrir { }
	{ alert("test") }
	{ 10 + 10 }
</Button>
```

=> On pourrait passer un **Tableau**

```jsx
<Button className="btn-wide">
	{                           // J'ouvre la porte du JS
		[
			"Matt",
			"Bob",
		]
	}                           
</Button>
```

___

```jsx

"""
- Pour afficher le badge `new` dans une seule des cards en le passant dans une `props`
- => Il vaut mieux utiliser une condition `ternaire`. 
"""

function ShoeCard(props) {

    console.log(props)
    return (
        <div className="card w-96 bg-neutral shadow-xl">
            <figure>
                <img 
                    className="h-32 w-full object-cover" 
                    src={props.image}
                    alt="Shoes"
                />
            </figure>

            <div className="card-body">
                <div className="flex items-center gap-2">
                    <p className="card-title">{props.title}</p>
                    <Badge isNew={props.isNew} />
	                /// TERNAIRE /// { props.isNew ? <div className="badge badge-primary">NEW</div> : null }
                </div>
                
            </div> 
        </div>
    )
}


const Badge = ({isNew}) => {
    if (!isNew) return null;
    return <div className="badge badge-primary">NEW</div>
}

export default function Component() {

	const MONIMG="www"
	const MONIMG2="www"
	const MONIMG3="www"

    return (
        <div className="flex flex-col items-start gap-4">
            
            <ShoeCard image={MONIMG} title="Chaussure" isNew={true} />
            <ShoeCard image={MONIMG2} title="Talon" />
            <ShoeCard image={MONIMG3} title="Pantoufle" />

        </div>
    )
}
```

```jsx
{ props.isNew ? <div className="badge badge-primary">NEW</div> : null }

=> Affiche le bagde si `TRUE`
=> Null si `FALSE`

isNew={True}
isNew
```

![[Pasted image 20240723160243.png]]



```jsx
{ props.isNew && <div className="badge badge-primary">NEW</div> }

=> Affiche le badge si valeur POSITIVE : `TRUE`, `String remplit`, `1` 
=> Null si valeur NÉGATIVE

isNew={1}
isNew={True}
isNew="test"
isNew
```

**Attention :** le `&&` affichera `0` => `{props.isNew}` si la valeur est négative. Si c'est `1` ça affiche le badge

![[Pasted image 20240723160142.png]]
**SAUF** si on wrap l'élément comme *Boolean* => alors on s'assure que l'élément sera de type True or False
`{ Boolean(props.isNew) && (<div className="badge badge-primary">NEW</div>) }`


---

**Le spread operator**

`{ ...obj }`

```jsx

function ShoeCard(props) {

    console.log(props)
    return (
        <div className="card w-96 bg-neutral shadow-xl">
            <figure>
                <img 
                    className="h-32 w-full object-cover" 
                    src={props.image}
                    alt="Shoes"
                />
            </figure>

            <div className="card-body">
                <div className="flex items-center gap-2">
                    <p className="card-title">{props.id} {props.title}</p>  
                    {props.isNew ? <div className="badge badge-primary badge-lg">New</div> : null}
                </div>
                
            </div> 
        </div>
    )
}


const SHOES = [
    {
        image: "www",
        isNew: 0,
        title: "Requin",
        id: 1
    },
    {
        image: "www",
        isNew: 1,
        title: "Chaussure",
        id: 2
    },
    {
        image: "www",
        isNew: 0,
        title: "Baerine",
        id: 3
    }
    
]

export default function Component() {

    return (
        <div className="flex flex-col items-start gap-4">
            {SHOES.map((shoe) => (
                <ShoeCard id={shoe.id} image={shoe.image} isNew={shoe.isNew} title={shoe.title}/>
                ///SPREAD OPERATOR => {...shoe}
                ///au lieu de devoir chaque fois rajouter la nouvelle valeur
                ///mais attention, a bien spécifier une key unique => key={shoe.id}
                ///=> Permet d'éviter l'erreur (should have a unique key)
            ))}
        </div>
    )
}
```

![[Pasted image 20240723171212.png]]

```jsx
{SHOES.map((shoe) => (
	<ShoeCard key={shoe.id} {...shoe}/>
	///SPREAD OPERATOR => {...shoe}
	///au lieu de devoir chaque fois rajouter la nouvelle valeur
	///mais attention, a bien spécifier une key unique => key={shoe.id}
))}
```

