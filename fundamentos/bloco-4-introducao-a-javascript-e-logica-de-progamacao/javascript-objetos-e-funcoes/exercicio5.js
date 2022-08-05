//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

const retornaMenor = (array) => {
  let menorNumero = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < menorNumero) {
      menorNumero = array[i];
    }
  }
  return menorNumero;
};
const impressao = retornaMenor([10, 2, 4, 6, 8, 22]);
console.log(impressao);
