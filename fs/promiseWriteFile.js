const { rejects } = require('assert');
const {writeFile } = require('fs');

function criaArquivo(name, content) {
    return new Promise((resolve, reject) => {
        writeFile(name, content, err => {
            if(err) return reject(err);
            resolve();
        })
    })
}

criaArquivo('promiseArquivo.txt', 'Criando um arquivo utilizando promises')
    .then(() => console.log('Arquivo promise.txt criado com sucesso!'))
    .catch(err => console.log(err))
