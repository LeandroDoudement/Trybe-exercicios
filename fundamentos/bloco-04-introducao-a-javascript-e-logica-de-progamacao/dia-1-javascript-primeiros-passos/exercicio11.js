//3. Crie um algoritmo que recebe a idade de Nat, Renan e Sincero e imprime quem é a pessoa mais nova no formato: "Pessoa" é a mais nova.
let pessoa = ['Natalia', 'Renan', 'Sincero'];
let idade = [20, 30, 40];
let pessoaMaisNova = 0;
for (let index = 0; index < idade.length; index++) {
  if (pessoaMaisNova < idade[index]) {
    pessoaMaisNova = idade[index];
  }
}
console.log('A pessoa mais nova é:' + );
