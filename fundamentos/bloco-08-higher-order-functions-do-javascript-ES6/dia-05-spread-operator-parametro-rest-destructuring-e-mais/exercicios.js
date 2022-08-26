// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
// });

// const sum = (...rest) => rest.reduce((acum, curr) => acum + curr);

// console.log(sum(4, 5, 6));
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// const alex = {
//   name: 'Alex',
//   age: 26,
//   likes: ['fly fishing'],
//   nationality: 'Australian',
// };

// const gunnar = {
//   name: 'Gunnar',
//   age: 30,
//   likes: ['hiking', 'scuba diving', 'taking pictures'],
//   nationality: 'Icelandic',
// };

// const personLikes = ({ name, age, likes }) =>
//   `${name} is ${age} years old and likes ${likes.join(', ')}.`;
// console.log(personLikes(alex));
// console.log(personLikes(gunnar));

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// const filterPeople = (arr) =>
//   arr.filter(
//     ({ nationality, bornIn }) =>
//       nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000
//   );

// console.log(filterPeople(people));

// const myList = [5, 2, 3];

// const swap = ([a, b, c]) => [c, b, a];

// console.log(swap(myList));

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// const toObject = ([name, brand, year]) => ({ name, brand, year });

// console.log(toObject(['Palio', 'Fiat', 2019]));

// const ships = [
//   {
//     name: 'Titanic',
//     length: 269.1,
//     measurementUnit: 'meters',
//   },
//   {
//     name: 'Queen Mary 2',
//     length: 1132,
//     measurementUnit: 'feet',
//   },
//   {
//     name: 'Yamato',
//     length: 256,
//     measurementUnit: 'meters',
//   },
// ];

// const shipLength = ({ name, length, measurementUnit }) =>
//   `${name} is ${length} ${measurementUnit} long`;

// console.log(shipLength(ships[0]));
// console.log(shipLength(ships[1]));
// console.log(shipLength(ships[2]));

// const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;

// console.log(greet('John'));
// console.log(greet('John', 'Good morning'));
// console.log(greet('Isabela', 'Oi'));

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const { spring, summer, autumn, winter } = yearSeasons;

let mesesDoAno = [...spring, ...summer, ...autumn, ...winter];
console.log(mesesDoAno);
