function highestCount(array) {
  let maiorNumero = -9n;
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j] === maiorNumero) {
      contador++;
    }
  }
  return contador;
}
const impressao = highestCount([-2, -2, -1]);
console.log(impressao);
