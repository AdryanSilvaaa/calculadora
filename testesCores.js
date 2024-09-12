/* Função para verificar valor se é verde ou não  */
function verificarCor(cor) {
    let resultado;
    switch (cor.toLowerCase()) {
        case 'verde':
            resultado = true;
            break;

        case 'vermelho':
        case 'amarelo':
            resultado = false;
            break;

        default:
            resultado = false;
    }
    return resultado;
}

// Solicitando o valor ao usuário com um prompt
let corUsuario = prompt('Digite uma cor (verde, vermelho ou amarelo):');

// Armazenando o valor retornado pela função em uma variável
let corTeste = verificarCor(corUsuario);

// Testando o valor da variável e exibindo a mensagem correspondente
if (corTeste === true) {
    document.write('Sucesso: A cor é verde.');
} else if (corUsuario.toLowerCase() === 'vermelho') {
    document.write('Erro: a cor não é vermelho.');
} else if (corUsuario.toLowerCase() === 'amarelo') {
    document.write('Erro: a cor não é amarelo.');
} else if (!isNaN(corUsuario)) {
    document.write("Erro: números não são válidos, digite uma das cores: verde/vermelho/amarelo.");
} else {
    document.write('Erro: por favor, digite uma das cores: verde/vermelho/amarelo.');
}
