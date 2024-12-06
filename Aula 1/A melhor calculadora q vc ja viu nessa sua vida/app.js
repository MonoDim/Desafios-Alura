let nome;
let numero1;
let numero2;
let resultado;
let funcao;

// Obter o nome do rapaiz
nome = prompt('Primeiramente, fala teu nome aqui pra mih papai?');
alert(`Beleza então ${nome}, você está prestes a presenciar a melhor calculadora do mundo inteiro.`);

// Obter os números e a função
numero1 = parseFloat(prompt(`Ow ${nome}, escolhe pra mim o primeiro número pra eu fazer a conta legal.`));
alert(`Beleza ${nome}, eu vou te passar uma tabela e você escolhe a função, ok?`);
funcao = parseInt(prompt(`(Digita só o número, sem o ".") | 1. + | 2. - | 3. x | 4. / |`));
numero2 = parseFloat(prompt(`Agora escolhe legal o segundo número.`));

// Calcular o resultado com a função
switch (funcao) {
    case 1: // Soma
        resultado = numero1 + numero2;
        break;
    case 2: // Subtração
        resultado = numero1 - numero2;
        break;
    case 3: // Multiplicação
        resultado = numero1 * numero2;
        break;
    case 4: // Divisão
        if (numero2 !== 0) { 
            resultado = numero1 / numero2;
        } else {
            resultado = "Erro: divisão por zero não é permitida.";
        }
        break;
    default:
        resultado = "Operação inválida. Por favor, escolha uma opção de 1 a 4.";
}

// amostra a resposta
alert('Agora eu vou calcular legal, não me enche o saco.');
alert('O resultado é...');
alert(`${resultado}!!!`);
