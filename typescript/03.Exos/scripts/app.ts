// Classification des nombres :
// Rédigez un programme qui reçoit un nombre et affiche un message. Si le nombre est
// positif, le programme doit afficher "Positif". Si le nombre est négatif, il doit afficher
// "Négatif". Si le nombre est égal à zéro, le programme doit afficher "Zéro".

let nombre: number = 0
let message: string = "Aucun message"

if (nombre > 0) {
    message = "Positif"
} else if (nombre < 0) {
    message = "Négatif"
} else {
    message = "Zéro"
}

console.log(message)

// --------------------------------------------------------------------------------------

function afficherMessage(nombre: number) {
    if (nombre > 0) {
        console.log("Positif")
    } else if (nombre < 0) {
        console.log("Négatif")
    } else {
        console.log("Zéro")
    }
}

afficherMessage(2)


// --------------------------------------------------------------------------------------


// Pair ou Impair : 
// Concevez un programme qui prend un nombre en entrée et affiche "Pair" si le nombre est
// pair, ou "Impair" s'il est impair.

function afficherPair(nombre: number) {
    if (nombre % 2 === 0) {
        console.log("Pair")
    }
    else {
        console.log("Impair")
    }
}

let titi: number

function totototo () {
  titi = 10
  if (titi = 10) {
    console.log("toto")
  }
  else {
    console.log("tata")
  }
}



afficherPair(9)


