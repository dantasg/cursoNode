
// Tente executar alguma coisa, se der erro execute o catch automaticamente
function execute(){
    executeTo();
}

function executeTo() {
    throw new Error('Ah não deu erro! Não foi possível, na minha máquina funciona!');
}

function init(){
    try {
        execute();
    } catch (error) {
        console.log(`Temos um problema! ${error.message}`);
    }
};

init();
console.log('Depois do erro!');
