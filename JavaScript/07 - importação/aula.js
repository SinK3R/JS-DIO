const { gets, print } = require ('./funcoes-auxiliares');

let maiorEncontrado = 0;

for (let i = 0; i < 5; i++) {
	const numerosSorteado = gets();
	if(numerosSorteado > maiorEncontrado){
		maiorEncontrado = numerosSorteado;
	}
}

print(maiorEncontrado);