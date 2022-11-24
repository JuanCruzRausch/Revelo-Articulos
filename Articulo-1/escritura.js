// Aquí requerimos el core module 'fs', este nos permite realizar la 
// lectura y escritura de archivos
const fs = require('fs');

// Guardamos en una variable un texto que queramos guardar
let texto = 'Esto es solo un texto de ejemplo';

// Y por último, utilizamos el módulo fs para crear el archivo y guardar
// el texto antes creado
// este archivo lo crearemos con el método 'writeFileSync' el cual por
// primer parámetro guardamos el directorio donde se guardará el 
// archivo y como segundo parámetro le pasamos el texto que queremos 
// guardar en este
fs.writeFileSync('./escritura.txt', texto);
