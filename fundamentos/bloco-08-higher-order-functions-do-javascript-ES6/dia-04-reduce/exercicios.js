// const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

// const flatten = () => arrays.reduce((acum, curr) => acum.concat(curr));

// console.log(flatten());

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// const reduceNames = () =>
//   books.reduce((acum, curr) => `${acum} ${curr.author.name},`, '');

// console.log(reduceNames());

// const averageAge = () =>
//   books
//     .map((book) => book.releaseYear - book.author.birthYear)
//     .reduce((acc, curr) => acc + curr) / books.length;

// console.log(averageAge());

// const longestNamedBook = () => {
//   return books.reduce((acc, curr) => {
//     if (curr.name.length > acc.name.length) {
//       return curr;
//     }
//     return acc;
//   });
// };

// console.log(longestNamedBook());

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

// const containsA = () => {
//   return names.reduce(
//     (acc, currWord) =>
//       acc +
//       currWord.split('').reduce((acumulator, currLetter) => {
//         if (currLetter === 'a' || currLetter === 'A') return acumulator + 1;
//         return acumulator;
//       }, 0),
//     0
//   );
// };
// console.log(containsA());

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const studentAverage = (students, grades) => {
  return students.map((student, index) => {
    return {
      name: student,
      average:
        grades[index].reduce((accu, curr) => {
          return accu + curr;
        }) / grades[index].length,
    };
  });
};

console.log(studentAverage(students, grades));
