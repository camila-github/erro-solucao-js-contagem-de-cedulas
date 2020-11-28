//SOLUCAO 1
var notas = [100, 50, 20, 10, 5, 2, 1];
var valorPago = parseInt(gets());
console.log(valorPago);

for (var x = 0; x < notas.length; x++) {
    if (valorPago >= notas[x]) {
        var div = Math.floor(valorPago / notas[x]);
        mensagem = div + " nota(s) de R$ " + parseFloat(notas[x]).toFixed(2);
        valorPago -= div * notas[x];
        console.log(mensagem.toString().replace(".", ","));
    } else {
        div = 0;
        mensagem = div + " nota(s) de R$ " + parseFloat(notas[x]).toFixed(2);
        console.log(mensagem.toString().replace(".", ","));
    }
}


//SOLUÇÃO 2 - Criado função e utilizado Reduce
cedulas = [100, 50, 20, 10, 5, 2, 1];
console.log(valorPago = parseInt(gets()));
contagemCedulas(cedulas, valorPago);

function contagemCedulas(cedula, vPago) {
    cedula.reduce(function(accValorPago, valorCedula) {
        if (accValorPago >= valorCedula) {
            console.log((div = Math.floor(accValorPago / valorCedula)) + " nota(s) de R$ " + parseFloat(valorCedula).toFixed(2).replace(".", ","));
            return (accValorPago -= div * valorCedula);
        } else {
            console.log((div = 0) + " nota(s) de R$ " + parseFloat(valorCedula).toFixed(2).replace(".", ","));
            return accValorPago;
        }
    }, vPago);
}