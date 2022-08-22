const newFunction = (obj) => {
  let newObj = {};
  Object.assign(newObj, obj);
  return newObj;
};

const impressao = newFunction({ age: 22, name: 'Leandro' });
console.log(impressao);
