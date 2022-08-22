//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
const contadorDeCaracteres = (array) => {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (contador < array[i].length) {
      contador = array[i].length;
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (contador === array[j].length) {
      return array[j];
    }
  }
};

const impressao = contadorDeCaracteres([
  'José',
  'Lucas',
  'Nádia',
  'Fernanda',
  'Cairo',
  'Joana',
]);
console.log(impressao);
