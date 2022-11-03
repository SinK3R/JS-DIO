const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(10);
notas.push(10);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
	const nota = notas[i];
	soma = soma + nota;
}

const media = soma / notas.length;
console.log(soma);
console.log('Sua média foi: ' + media.toFixed(2));

if (media <= 5){
	console.log('O aluno está reprovado!')
} else if (media >= 5 && media<= 7){
	console.log('O aluno está de recuperação!')
} else {
	console.log('O aluno está aprovado!')
}