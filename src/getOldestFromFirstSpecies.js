const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // preciso encontrar o primeiro id da especie do meu determinado funcionario.
  const encontraId = data.employees.find((ids) => ids.id === id).responsibleFor[0];
  // uso o find novamente para retornar meu array residentes
  const encontraAninal = data.species.find((specie) => specie.id === encontraId).residents
    .reduce((maior, idade) => {
      if (maior.age > idade.age) return maior;
      return idade;
    });// utilizo o reduce para me retornar o meu objeto com idade mais velha.
    // como a saida me pede em array, utilizo template literals para sair na forma que eu quero.
  return [`${encontraAninal.name}`, `${encontraAninal.sex}`, encontraAninal.age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
