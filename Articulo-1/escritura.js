// Aqui requerimos el core module 'fs', este nos permite realizar la 
// lectura y escritura de archivos
const fs = require('fs');

// Guardamos en una variable un texto que queramos guardar
let texto = 'Esto es solo un texto de ejemplo';

// Y por ultimo, utilizamos el modulo fs para crear el archivo y guardar
// el texto antes creado
// este archivo lo crearemos con el metodo 'writeFileSync' el cual por
// primer parametro guardamos el directorio donde se guardaria el 
// archivo y como segundo paramentro le pasamos el texto que queremos 
// guardar en este
fs.writeFileSync('./escritura.txt', texto);