//PAGINA 36

console.log("loaded ")

const carasDado = Math.floor(100*Math.random())+1

const dado = Math.floor(carasDado*Math.random())+1;

console.log(dado)

//PAGINA 37

let palabras_counter = 0
const frase = "aAa"

for (let index = 0; index < frase.length; index++) {
    if (frase[index].toLowerCase() === "a") {
        palabras_counter++
    }
}
console.log(palabras_counter)