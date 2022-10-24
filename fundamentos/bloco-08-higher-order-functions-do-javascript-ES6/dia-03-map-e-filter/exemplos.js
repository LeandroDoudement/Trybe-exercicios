let pessoas = ['leandro', 'zan', 'mãe', 'noguera'];
let newPessoas = pessoas.map(
  (element) => element[0].toUpperCase() + element.slice(1)
);
console.log(newPessoas);
