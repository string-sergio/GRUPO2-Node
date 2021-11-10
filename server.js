//PAGINA 36

console.log("loaded ")

const carasDado = Math.floor(100 * Math.random()) + 1

const dado = Math.floor(carasDado * Math.random()) + 1;

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

//PAGINA 42

const fs = require('fs');

const filePath = 'TEXTO.txt';

fs.readFile(filePath, 'utf8', (err, data) => {

    if (err) {

        console.error('Error', err);

    } else {

        data.toString();
        let word_file_counter = 1
        if (data === "") {
            word_file_counter = 0
        }
        for (let index = 0; index < data.length; index++) {
            if (data[index].toLowerCase() === " ") {
                word_file_counter++
            }
        }
        console.log(word_file_counter)
    }

});