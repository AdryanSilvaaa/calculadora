
function calculadora(valor1, valor2, tipoDeconta) {
    var resultado;

    if (isNaN(valor1) || isNaN(valor2)) {
      alert("Erro: apenas números são permitidos");
      return;
    }

    if (tipoDeconta === "soma") {
      resultado = valor1 + valor2;
    } else if (tipoDeconta === "subtração") {
      resultado = valor1 - valor2;
    } else if (tipoDeconta === "divisão") {
      resultado = valor1 / valor2;
    } else if (tipoDeconta === "multiplicação") {
      resultado = valor1 * valor2;
    }

    alert("O resultado é " + resultado);
  }

  var nu1 = prompt("Informe um valor");
  if (isNaN(nu1) || nu1.trim() === "") {/* nu1.trim() === "" verifica se valor e vazio */
    alert("Erro: apenas números são permitidos");
  } else {
    nu1 = parseFloat(nu1);
    var nu2 = prompt("Informe um valor");
    if (isNaN(nu2) || nu2.trim() === "") {
      alert("Erro: apenas números são permitidos");
    } else {
      nu2 = parseFloat(nu2);
      var operacao = prompt(
        "Que tipo de conta deseja fazer: soma, subtração, divisão, multiplicação"
      );
      calculadora(nu1, nu2, operacao);
    }
  }
  calculadora(nu1, nu2, operacao);

52