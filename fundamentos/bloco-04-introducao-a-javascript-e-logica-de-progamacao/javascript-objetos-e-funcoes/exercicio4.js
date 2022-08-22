//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

const retornaMaior = (array) => {
  let maiorNumero = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  return maiorNumero;
};
const impressao = retornaMaior([1, 2, 3, 4, 5]);
console.log(impressao);
