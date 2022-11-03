/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome,peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC(INC = peso / (altura * altura));
Instacie uma pessoa chamada José que tenha 78kg de peso e 1,75 de altura, e peça a José para dizer o seu IMC;
*/

class Pessoa {
	nome;
	peso;
	altura;

	constructor (nome, peso, altura){
		this.nome = nome;
		this.peso = peso;
		this.altura = altura;
	}
	calIMC(valorIMC){
		return this.peso / (this.altura * this.altura);
	}
	classificarImc(){
		const imc = this.calIMC();
		if (this.calIMC < 18.5) {
			return('Seu IMC é de: ' + imc + ' , você está abaixo do peso!' )
		 } else if (imc >= 18.5 && imc < 25) {
			return('Seu IMC é de ' + imc + ' , você está com o peso normal!')
		 } else if (imc >= 25 && imc < 30) {
			return('Seu IMC é de ' + imc + ' , você está acima do peso')
		 } else if(imc >= 30 && imc < 40) {
			return('Seu IMC é de ' + imc + ' , você está obeso!')
		 } else {
			return('Obesidade grave!')
		 }
	}
}

const jose = new Pessoa('José', 78, 1.75);
console.log(jose.classificarImc());
const bruno = new Pessoa('Bruno', 60, 1.60);
console.log(bruno.classificarImc());