

## 0. Events

```jsx

/*

const btn = document.querySelector("#test_id")

btn.addEventListener("click", () => {
    console.log("clicked")
})

*/	

export default function UseState() {
    return (
        <>
            <div className="">
                <button id="test_id" className="btn btn-primary">Click me</button>
            </div>
        </>
    )
}
```

=> Pour ajouter un évènement à un composant peut utiliser du *javascript => code impératif = décrit précisément ce qu'on peut faire*
=> Mais on utilise *React => code déclaratif* : pour ajouter un event il suffit de passer une *callback function = fonction anonyme  ( ) => { }*

**2 façons de faire : **
```jsx
<button id="test_id" onClick={ () => { } } className="btn btn-primary">Click me</button>
```


```jsx
const handleClick = () => { }
 
<button id="test_id" onClick={ handleClick } className="btn btn-primary">Click me</button>
```

**useState**

![[Pasted image 20240723222615.png]]

```jsx
const initialState = () => {
    console.log('initialState');
    return 20
}

export default function UseState() {

    const [count, setCount] = useState(() => initialState());

    const handleClick = () => {
        console.log('le bouton est cliqué');
        setCount(100)
    }

    return (
        <>
            <div className="flex items-center gap-4">
                <button id="test_id" onClick={ handleClick } className="btn btn-primary">
                    { count }
                </button>
            </div>
        </>
    )
}
```

=> la valeur initiale est appelée à chaque fois que le State est appelé. 
Pour contrer ça on peut passer un callback

## 1. Syntaxe (Naming / Initial Value)

## 2. Core React Loop : Comment React fonctionne vraiment

## 3. Render VS Painting : Comment faire la différence ? 

## 4. Snapshot et async update

## 5. Controlled VS Uncontrolled Form

## 6. Props VS State
## 7. Update de listes en React : La fameuse todo

