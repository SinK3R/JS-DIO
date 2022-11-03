/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reias para realizar este percuso.
*/

class Carros {
	marca;
	cor;
	gastoMedioPorKM;

	constructor (marca, cor, gastoMedioPorKM){
		this.marca = marca;
		this.cor = cor;
		this.gastoMedioPorKM = gastoMedioPorKM;
	}
	calGastoPorPercurso(distancia, precoCombustivel){
		return distancia * this.gastoMedioPorKM * precoCombustivel;
	}
}

const uno = new Carros('Fiat', 'Azul', 1/12);
console.log(uno.calGastoPorPercurso(70, 5));
const palio = new Carros('Fiat', 'Branco', 1/10);
console.log(palio.calGastoPorPercurso(70, 5));