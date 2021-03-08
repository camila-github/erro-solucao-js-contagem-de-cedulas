//SOLUÇÃO 1 - Criado função e utilizado Reduce
const cedulas = [100, 50, 20, 10, 5, 2, 1]; /*Atribuido as cedulas no array*/
console.log(valorPago = parseInt(gets())); /*Imprime no console o valor da primeira linha de entrada*/
contagemCedulas(cedulas, valorPago); /*Chama a função*/

/*O valorPago será calculado com cada cedula do array*/
function contagemCedulas(cedula, vPago) {
    cedula.reduce(function(accValorPago, valorCedula) {
        let div;
        if (accValorPago >= valorCedula) {
            /*divide o valorPago com cada cedula que tem no array.Concatena resultado com o texto padrão.
            Adiciona dois digitos depois da virgula,no valor da cedula.*/
            console.log((div = Math.floor(accValorPago / valorCedula)) + " nota(s) de R$ " + parseFloat(valorCedula).toFixed(2).replace(".", ","));
            //multiplica o valor da divisão com o valor da cedula, e subtrae resultado com o valorPago.
            return (accValorPago -= div * valorCedula);
        } else {
            //Se o valorPago nao for maior que o valor da cedula, imprime zero referente a cedula.
            console.log((div = 0) + " nota(s) de R$ " + parseFloat(valorCedula).toFixed(2).replace(".", ","));
            return accValorPago;
        }
    }, vPago); // o calculo inicial, utilizado no Reduce será o valorPago
}


//SOLUCAO 2
/*Atribuido as cedulas no array*/
var notas = [100, 50, 20, 10, 5, 2, 1];
/*Imprime no console o valor da primeira linha de entrada*/
var valorPago = parseInt(gets());
console.log(valorPago);

/*O loop irá ocorrer de acordo com a quantidade de cedulas que tem no array*/
for (var x = 0; x < notas.length; x++) {
    if (valorPago >= notas[x]) {
        /*divide o valorPago com cada cedula que tem no array*/
        var div = Math.floor(valorPago / notas[x]);
        /*concatena o resultado da divisão com o texto padrão e adiciona dois digitos depois da virgula, no valor da cedula*/
        mensagem = div + " nota(s) de R$ " + parseFloat(notas[x]).toFixed(2);
        /*multiplica o valor da divisão com o valor da cedula, e subtrae com o valorPago*/
        valorPago -= div * notas[x];
        /*mostra a mensagem no console, trocando no valor o ponto pela virgula*/
        console.log(mensagem.toString().replace(".", ","));
    } else {
        /*Se o valorPago nao for maior que o valor da cedula, imprime zero referente a cedula*/
        div = 0;
        mensagem = div + " nota(s) de R$ " + parseFloat(notas[x]).toFixed(2);
        console.log(mensagem.toString().replace(".", ","));
    }
}