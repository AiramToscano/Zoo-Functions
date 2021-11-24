const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // o map criar um novo array, com parametros ids e o find proucura meu id que eu desejo.
  return ids.map((id) => data.species.find((animal) => animal.id === id));
}
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
