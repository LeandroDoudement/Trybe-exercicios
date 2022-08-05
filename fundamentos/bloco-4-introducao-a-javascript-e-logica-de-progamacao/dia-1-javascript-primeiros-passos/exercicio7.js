//crie um algoritmo que retorne o fatorial de 10.

const fatorial = (num) => {
  if (num === 0) {
    return 1;
  }
  let resultado = num;
  for (let i = 1; i < num; i++) {
    resultado *= i;
  }
  return resultado;
};
console.log(fatorial(10));
