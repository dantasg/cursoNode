require('./subdirectory/sub');s
console.log('---------------------------------');
console.log(`Nome do arquivo: `, __filename);
console.log(`Diretório do arquivo`, __dirname);
console.log(`Parâmetros de execução`, process.argv);

switch(process.argv[2]) {
    case '-a' :
        console.log('Execute rotina principal');
        break;
    case '-i' :
        console.log('Execute Instalação');
        break;
    case '-q' :
        console.log('Encerrando aplicação');
        process.exit(); // interrompe imediatamente o código 
        break;
    default :
	    console.log('Parâmetro inválido');
}

console.log(`Ambiente do servidor: `, process.platform);


