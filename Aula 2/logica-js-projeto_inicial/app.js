//Variaveis
let dobroDoNumero
let numero

//Funções
function calcularDobroNumero(numero) {
    let numeroDobro = numero * 2;
    return numeroDobro;
};

//prompts
 numero = prompt('Escolha um numero que vou retornar o dobro!')
 dobroDoNumero = calcularDobroNumero(numero);
alert(`O dobro de ${numero} é ${dobroDoNumero}`)