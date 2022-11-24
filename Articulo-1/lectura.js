// Requerimos el modulo 'fs' para leer un archivo
const fs = require('fs');

// Luego crearemos una variable donde guardaremos lo que obtengamos de 
// la lectura de un archivo de texto utilizando el metodo "readFileSync"
// el cual toma por primer parametro debemos pasarlo el directorio del
// archivo que queriamos leer, y como segundo parametro pasamos 'utf-8'
// que es la codificación de caracteres más común de la World Wide Web.
const texto = fs.readFileSync('./escritura.txt', 'utf-8');

// Por ultimo podriamos usar esta variable para hacer lo que queramos 
// con lo que obtengamos, pero en este caso solo lo mostraremos por 
// consola
console.log(texto);