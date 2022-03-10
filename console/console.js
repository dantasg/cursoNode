console.log('Exibindo uma mensagem no console!');

// Error

// console.error(new Error('Exibindo mensagem de erro, temos problema!'));

// Tabela
const carros = ['GM', 'FIAT', 'FORD', 'VW', 'Renault', 'Honda', 'Hyundai'];

console.table(carros);

// OBJ
const dados = {name: 'Glaucio Daniel', empresa: 'Hcode'};

console.table(dados);

// conta
console.count('processo');
console.count('processo');
console.count('processo');

console.log('Resetando o processo');
console.countReset('processo');

console.count('processo');

// tempo
console.time('contador');
// for (let index = 0; index < 100; index++) {
//     console.log(index);
// }
console.timeEnd('contador');

// 
console.assert(true, 'Faça alguma coisa!');

console.assert(false, 'Ih rapaz %s, que pena!', 'Não funcionou');

// limpa
// console.clear();