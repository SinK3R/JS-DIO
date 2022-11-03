/* 
Faça um algorítmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabale a baixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const nota1 = 7;
const nota2 = 8;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media <= 5){
	console.log('Sua média foi: ' + media +' , o aluno está reprovado!')
} else if (media >= 5 && media<= 7){
	console.log('Sua média foi: ' + media +' , o aluno está de recuperação!')
} else {
	console.log('Sua media foi: ' + media +' , o aluno está aprovado!')
}