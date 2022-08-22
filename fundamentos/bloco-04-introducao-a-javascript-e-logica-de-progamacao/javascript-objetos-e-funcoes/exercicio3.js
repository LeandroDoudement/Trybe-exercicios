//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

const verificaPalindromo = (palindromo) => {
  let word = palindromo;
  let newWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  if (newWord === palindromo) {
    return true;
  }
  return false;
};

const newLocal = verificaPalindromo('arara');
console.log(newLocal);
