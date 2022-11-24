// Requerimos el módulo 'fs'
const fs = require('fs');

// Este mismo módulo nos permite usar métodos asíncronos, en este caso
// 'writeFile' toma los mismos parámetros que 'writeFileSync', pero con 
// la diferencia que como tercer parámetro le pasamos una callback 
// function
fs.writeFile('./escrituraAsync.txt', `algo que queramos guardar`, err => {
    console.log("Tu archivo ha sido creado!");
});
