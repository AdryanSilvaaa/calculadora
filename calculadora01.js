
/* Função para verificar valor se é verde ou não  */
function verificarCor(cor) {
    let resultado;
    switch (cor.toLowerCase()) {
        case 'verde':
            resultado = true;
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
if (corTeste) {
    document.write('Sucesso: A cor é verde.');
} else {
    document.write('Erro');
}



/* 
 escrever uma função que recebera um parametro tipo texto pode ser verde vermelho ou amarelo.
 a função ira testar o valor desse parametro tipo texto, caso o valor seja 
 verde retornara um valor boolean que indica verdadeiro, e qualquer outra valor é falso. 
 o valor por essa função devera ser armazenado em uma variavel e posteriormente sera testado.
 se o valor for verdadeiro, mostrar uma menssagem de sucesso caso ao contrario indicar erro 

*/