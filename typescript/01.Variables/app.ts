// Déclaration d'une variable

console.clear()

// Déclaration d'une variable avec le typage explicite
let nom: string = "Jean"
console.log(nom)

// Déclaration d'une variable
let nombre = 10

// Déclaration d'une variable pour un tableau de nombres
let monTableau: number[] = [1, 2, 3, 4, 5]
console.log(`tableau ${monTableau}`)

let monTuple: [string, number] = ["Jean", 10]
console.log(`monTuple ${monTuple}`)

let monObjet: {nom: string, age: number} = {nom: "Jean", age: 10}
console.log(`monObjet ${monObjet}`)

let monUnion: string | number = "Jean"
console.log(`monUnion ${monUnion}`)


let monLitteral: "un" | "deux" | "trois"
monLitteral = "trois"
console.log(`monLitteral ${monLitteral}`)

let maConst: "jean" | "toto" = "toto"

maConst = "toto"


type maType = "jean" | "toto"


// déclaration d'une variable 


// créer une fonction qui prend un type en paramètre
function maFonction(maVariable: number )  {
    console.log("maVariable : " + maVariable)
}

maFonction(2)
    

function maSuperFonction( unParams: number ) {
    console.log("unParms :" + unParams)
}

maSuperFonction(0)

function toto( unParms: "toto" | "tata") {
    console.log("unParms :" + unParms)
}
