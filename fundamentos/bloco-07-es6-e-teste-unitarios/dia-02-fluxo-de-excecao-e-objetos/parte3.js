const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const addNewKey = (modifiedObj, newKey, value) => {
//   modifiedObj[newKey] = value;
// };

// addNewKey(lesson2, 'turno', 'noite');
// console.log(lesson2);

// const objectKeys = (obj) => {
//   return Object.keys(obj);
// };

// console.log(objectKeys(lesson1));

// const objectSize = (obj) => {
//   return Object.keys(obj).length;
// };

// console.log(objectSize(lesson3));

// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

// const totalStudents = (obj) => {
//   let total = 0;
//   const array = Object.keys(obj);
//   for (index in array) {
//     total += obj[array[index]].numeroEstudantes;
//   }

//   return total;
// };

// console.log(totalStudents(allLessons));

// const getValueByNumber = (obj, index) => {
//   return Object.values(obj)[index];
// };

// console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
  const array = Object.entries(obj);
  for (let index in array)
    if (array[index][0] === key && array[index][1] === value) {
      return true;
    }
  return false;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
