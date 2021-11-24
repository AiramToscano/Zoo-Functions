const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animal1) => animal1.name === animal)
    .residents.every((year) => year.age >= age);
}
// console.log(getAnimalsOlderThan('lions',10));
module.exports = getAnimalsOlderThan;
