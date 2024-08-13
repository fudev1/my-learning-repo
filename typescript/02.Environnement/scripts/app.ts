let isDone: boolean = false
let greeting: string = "Hello"

let numbers: number[] = [1, 2, 3, 4, 5]
for (let boucle of numbers) {
    console.log(boucle)
}

let person: {firstname: string, lastname: string}
person = {firstname: "Jean", lastname: "Dupont"}
console.log(`prenom : ${person.firstname}, nom : ${person.lastname}`)

let status2: "success" | "error" | "loading" = "loading"
