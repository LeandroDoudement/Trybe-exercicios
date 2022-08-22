// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//      return console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       return console.log(elseScope);
//     }
//   }

//   testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = (array) => array.sort(function(a, b){return a - b});

// console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);

const factorial = (num) => num > 1 ? num * factorial(num - 1) : 1;

const impressao = factorial(20);
console.log(`Esse é o fatorial ${impressao}`);