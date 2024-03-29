// const planetDistanceFromSun = ({
//   name,
//   distanceFromSun: { value, measurementUnit },
// }) => `${name} está a ${value} ${measurementUnit} de distância do Sol`;

// const MEASUREMENT_UNIT = 'quilômetros';

// const mars = {
//   name: 'Marte',
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// const venus = {
//   name: 'Venus',
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// const jupiter = {
//   name: 'Jupiter',
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// const getPlanet = () => {
//   const mars = {
//     name: 'Mars',
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: 'kilometers',
//     },
//   };
//   setTimeout(() => {
//     console.log('Returned planet: ', mars);
//   }, 4000);
// };

// getPlanet(); // Imprime Marte depois de 4 segundos

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo

// const sendMarsTemperature = () => {
//   setTimeout(() => {
//     console.log(
//       `A temperatura de Marte é: ${getMarsTemperature()} graus celsius`
//     );
//   }, messageDelay());
// };

// sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => degreeCelsius * (9 / 5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

// const greet = (temperature) =>
//   console.log(
//     `Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`
//   );

// // Definição da função sendMarsTemperature...
// const sendMarsTemperature = (callback) => {
//   const currentTemperature = getMarsTemperature();
//   setTimeout(() => {
//     callback(currentTemperature);
//   }, messageDelay());
// };

// sendMarsTemperature(temperatureInFahrenheit); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

// sendMarsTemperature(greet); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => degreeCelsius * (9 / 5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(
//     `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`
//   );

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (callback, callBackError) => {
//   const currentTemperature = getMarsTemperature();
//   const sucess = Math.random() <= 0.6;
//   setTimeout(() => {
//     if (sucess) {
//       callback(currentTemperature);
//     } else {
//       callBackError('Robot is busy');
//     }
//   }, messageDelay());
// };
// // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);

// const pokemons = [
//   {
//     name: 'Bulbasaur',
//     type: 'Grama',
//     ability: 'Raio Solar',
//   },
//   {
//     name: 'Charmander',
//     type: 'Fogo',
//     ability: 'Lança Chamas',
//   },
//   {
//     name: 'Squirtle',
//     type: 'Água',
//     ability: 'Jato de Água',
//   },
// ];

// function getPokemonDetails(selectedPokemon, callback) {
//   const foundPokemon = pokemons.find(
//     (pokemon) => pokemon.name === selectedPokemon
//   );

//   setTimeout(() => {
//     if (foundPokemon === undefined) {
//       return callback(new Error('Não temos esse pokémon para você :('), null);
//     }

//     const { name, type, ability } = foundPokemon;

//     const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

//     callback(null, messageFromProfOak);
//   }, 2000);
// }

// const handlePokemonSearch = (error, message) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(message);
//   }
// };

// getPokemonDetails('Bulbasaur', handlePokemonSearch);
// getPokemonDetails('batata', handlePokemonSearch);
