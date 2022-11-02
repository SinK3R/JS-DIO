/* 
Faça um programa para calcular o valor gasto de combustivel em uma viagem.
Você terá 3 variáveis. Sendo elas:
1- Preço combustível; 
2- Gasto médio de gasto do carro por KM;
3- Distância em KM da viagem;

Imprima no console o valor que será gastopara realizar esta viagem.
*/

/* Declara o valor constante do combustível*/

const valGasolina = 5.50;
const litroPorKM = 12;
const distViagem = 1580;

const litroCosum = distViagem / litroPorKM;
const gastoTotal = litroCosum * valGasolina;

console.log('O valor gasto em gasolina foi R$' + gastoTotal.toFixed(2) + ' reais');


