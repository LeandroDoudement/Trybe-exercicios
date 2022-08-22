// const newEmployee = (fullName) => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return { fullName, email: `${email}@trybe.com` };
// };

// const newEmployees = (empregado) => {
//   const employees = {
//     id1: empregado('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: empregado('Luiza Drummond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: empregado('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   };
//   return employees;
// };

// console.log(newEmployees(newEmployee));

// const numChecker = (num, numSorteado) => numSorteado === num;

// const sorteio = (num, callback) => {
//   let numSorteado = Math.floor(Math.random() * 5 + 1);
//   if (callback(num, numSorteado) === true) {
//     return 'Parabéns você ganhou';
//   }
//   return 'Tente novamente';
// };

// console.log(sorteio(2, numChecker));

const checker = (answer, correctAnswer) => {
  let resultado = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === correctAnswer[i]) {
      resultado++;
    }
    if (answer[i] === 'N.A') {
      resultado = resultado;
    } else if (answer[i] !== correctAnswer[i]) {
      resultado -= 0.5;
    }
  }
  return resultado;
};

const test = (answer, correctAnswer, callback) => {
  let nota = callback(answer, correctAnswer);
  return `Sua nota nesta prova foi: ${nota}`;
};

console.log(
  test(
    ['A', 'C', 'B', 'C', 'A', 'A', 'D', 'A', 'C', 'C'],
    ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'],
    checker
  )
);
