// Requerimos el modulo 'fs'
const fs = require('fs');

// Este mismo modulo nos permite usar metodos asíncronos, en este caso 'writeFile' toma los mismos parametros que 'writeFileSync', pero con la diferencia que como tercer parametro le pasamos una callback function
fs.writeFile('./escrituraAsync.txt', `algo que queramos guardar`, err => {
    console.log("Your file has been written!");
});