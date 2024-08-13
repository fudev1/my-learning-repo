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


