// const email = [
//   'leandrodoudement@gmail.com',
//   'mc_macedo@hotmail.com',
//   'favoreal@gmail.com',
// ];
// email.forEach((item, index, array) => {
//   console.log(`Email número ${index}: ${item} de ${array.length} emails`);
// });

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(showEmailList);

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (num) => num % 3 === 0 && num % 5 === 0;

// const impressao = numbers.find(findDivisibleBy3And5);

// console.log(impressao);

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (string) => string.length === 5;

// const impressao = names.find(findNameWithFiveLetters);

// console.log(impressao);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
}

console.log(findMusic('31031685'));
