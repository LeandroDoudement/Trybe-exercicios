//7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
const verificaFinal = (inicio, fim) => {
  if (inicio.endsWith(fim) === true) {
    return true;
  }
  return false;
};
const impressao = verificaFinal('trybe', 'lalala');
console.log(impressao);
