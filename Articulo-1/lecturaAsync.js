const fs = require('fs');

// Este metodo toma los mismos parametros que el 'readFileSync' pero como tercer parametro toma una callback function, cuyos parametros son primero donde se guardaria el error en caso de algo salga mal, y como segundo parametro lo que se obtuvo de dicha lectura
fs.readFile('./escrituraAsync.txt', 'utf-8', (err,data) => {
    console.log(data);
})
