const fs = require("fs");

console.log((process.hrtime()[0]/[60]).toFixed(5));
console.log('Antes da leitura do Arquivo');

const dados = fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    console.log('Executando o arquivo.');
});

console.log('Depois da leitura do Arquivo');
console.log((process.hrtime()[0]/[60]).toFixed(5));
