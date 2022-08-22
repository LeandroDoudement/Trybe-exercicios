//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
const somaAteN = (n) => {
  if (n < 0) {
    return 'O numero deve ser maior que 0';
  }

  let soma = 0;
  for (i = 0; i <= n; i++) {
    soma += i;
  }
  return soma;
};
const impressao = somaAteN(5);
console.log(impressao);
