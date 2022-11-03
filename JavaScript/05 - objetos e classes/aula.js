/*
Objeto - estrutura dinamica de chave e valor. 
Dentro dos valores podem ter funções.

função dentro de obejto costuma ser chamade de metodo.
this - assume o objeto.

sempre começar classes com letras maiusculas.

class - definição.
instancia - ocorrencia.

lembrar do uso da crase

constructor - o que acontece após algo ser instanciado.

*/

class Pessoa {
	nome;
	idade;
	anoDeNascimento;

	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
		this.anoDeNascimento = 2022 - idade;
	}

	descrever(){
		console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
	}
}

function compararPessoas(p1, p2) {
	if(p1.idade > p2.idade) {
		console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
	} else if(p2.idade > p1.idade) {
		console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
	} else {
		console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
	}
}

const joao = new Pessoa('João', 25);
const jorge = new Pessoa('Jorge', 44);

compararPessoas(joao, jorge);

