const fs = require('fs');

// Primero leemos un archivo y guardamos su contenido en la callback 
// function
fs.readFile('./escrituraAsync.txt', 'utf-8', (err,data1) => {
    // Luego hacemos una escritura a un archivo usando lo guardado 
    // anteriormente para poder guardarlo nuevamente en otro archivo, y 
    // también agregándole unas cosas más
    fs.writeFile('./final.txt', `${data1}\\nY eso seria todo!`, err => {
        console.log("Su archivo se creó de forma correcta!");
    });
});
