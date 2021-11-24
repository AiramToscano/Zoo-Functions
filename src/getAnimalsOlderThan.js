const data = require('../data/zoo_data');
// primeiro eu busco meu objeto com o nome selecionado
// depois verifico se todos os animais daquela especie possuem uma idade minima.
function getAnimalsOlderThan(animal, age) {
  return data.species.find((animal1) => animal1.name === animal)
    .residents.every((year) => year.age >= age);
}
// console.log(getAnimalsOlderThan('lions',10));
module.exports = getAnimalsOlderThan;
