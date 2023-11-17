function calcMultiplos(num) {
    let soma = 0
     for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    return soma;
}


const numeroTeste = 10;
const resultado = calcMultiplos(numeroTeste);

console.log(`O somatório de todos os números menores que ${numeroTeste} e divisíveis por 3 ou 5 é:  ${resultado}`);
