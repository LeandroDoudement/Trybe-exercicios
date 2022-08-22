//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let contador = 0;
for (let index = 3; index <= 150; index++) {
  if (index % 3 === 0) {
    contador++;
  }
}
if (contador === 50) {
  console.log('Mensagem secreta');
}
console.log('Quantidade: ' + contador);
