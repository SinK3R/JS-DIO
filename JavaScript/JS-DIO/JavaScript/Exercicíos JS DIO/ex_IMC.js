/*
Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

IMC em adultos condição:
- Abaixo de 18.5, abaixo do peso;
- Entre 18.5 e 25, peso normal;
- Entre 25 e 30, Acima do peso;
- Acima de 40, Obesidade grave;
*/ 

 const peso = 60;
 const altura = 1.60;
 const valImc = peso / Math.pow(altura, 2);
 console.log(valImc);

 if (valImc < 18.5) {
	console.log('Seu IMC é de: ' + valImc + ' , você está abaixo do peso!' )
 } else if (valImc >= 18.5 && valImc < 25) {
	console.log('Seu IMC é de' + valImc + ' , você está com o peso normal!')
 } else if (valImc >= 25 && valImc < 30) {
	console.log('Seu IMC é de' + valImc + ' , você está acima do peso')
 } else if(valImc >= 30 && valImc < 40) {
	console.log('Seu IMC é de' + valImc + ' , você está obeso!')
 } else {
	console.log('Obesidade grave!')
 }