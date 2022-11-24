// Requerimos el módulo 'fs' para leer un archivo
const fs = require('fs');

// Luego crearemos una variable donde guardaremos lo que obtengamos de 
// la lectura de un archivo de texto utilizando el método 
// "readFileSync" el cual toma por primer parámetro debemos pasarlo el
// directorio del archivo que queremos leer, y como segundo parámetro 
// pasamos 'utf-8'que es la codificación de caracteres más común de la 
// World Wide Web.
const texto = fs.readFileSync('./escritura.txt', 'utf-8');

// Por último podríamos usar esta variable para hacer lo que queramos 
// con lo que obtengamos, pero en este caso solo lo mostraremos por 
// consola
console.log(texto);