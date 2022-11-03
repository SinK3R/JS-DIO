/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
1 - Preço etanol;
2 - Preço gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

*/

const precoEtanol = 5.30;
const precoGasolina = 5.70;
const kmPorLitros = 10;
const DistânciaKM = 100;
const tipoCombustivel = 'gasolina';

const consumoLitros = DistânciaKM / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
	console.log('O gasto médio do carro é de ' + consumoLitros.toFixed(2));
} else {
	console.log('O gasto médio do carro é de ' + consumoLitros.toFixed(2));
}
