//PAGINA 36

console.log("loaded ")

const carasDado: number = Math.floor(100 * Math.random()) + 1;

const dado: number = Math.floor(carasDado * Math.random()) + 1;

console.log(dado)

//PAGINA 37

let palabras_counter: number = 0
const frase: string = "aAa"

for (let index = 0; index < frase.length; index++) {
    if (frase[index].toLowerCase() === "a") {
        palabras_counter++
    }
}
console.log(palabras_counter)

//PAGINA 42

const fs = require('fs');

const filePath = 'src/TEXTO.txt';
const newPath = 'src/newtext.txt';

//a

function salto_linea(content: string){
    let array_content:string [] = content.split(" ")
 
    let salida_fichero: string = ""
    for (let index = 0; index < array_content.length; index++) {
        salida_fichero += array_content[index] + '\n';
    }
    return salida_fichero
}










function newFile(content: string, ruta: string) {

    fs.writeFile(ruta, content, (err: string) => {

        if (err) {

            console.error(err);

            return;

        }

        console.log("- File created successfully! (src/new.txt)");

    });

}


function procesarFile (){
fs.readFile(filePath, 'utf8', (err: string, data: string): void => {

    if (err) {

        console.error('Error', err);

    } else {


        
        
        newFile(salto_linea(data.toString()), newPath)
        
        let word_file_counter: number = 1
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
}

procesarFile()
