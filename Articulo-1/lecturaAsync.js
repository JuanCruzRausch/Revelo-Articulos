const fs = require('fs');

// Este método toma los mismos parámetros que el 'readFileSync' pero como
// tercer parámetro toma una callback function, cuyos parámetros son 
// primero donde se guardaría el error en caso de algo salga mal, y como 
// segundo parámetro lo que se obtuvo de dicha lectura
fs.readFile('./escrituraAsync.txt', 'utf-8', (err,data) => {
    console.log(data);
})
