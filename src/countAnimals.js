const data = require('../data/zoo_data');
// primeira coisa é retornar um objeto caso o array seja vazio,
// com isso construir um objeto vazio para armazenar meus elementos
// utilizando um for each
// meu segundo if sever para verificar se meu parametro passado é um objeto
// de  1 tamanho ou não, caso a condição seja verdadeira
// eu encontro o tamanho do meu objeto especie que no caso vai ser o numero da
// quantidade de animais.
// para meu terceiro if eu faço a mesma verificação do objeto
// caso a condição seja verdadeira, eu preciso encontar primeiro o nome da minha especie
// logo depois de encontrar, eu filtro todos que tem um determinado sexo, logo depois
// eu imprimo a quantidade das especies com devido sexo especializado.
function countAnimals(animal) {
  if (!animal) {
    const ObjAnimais = {};
    data.species.forEach((animal1) => {
      ObjAnimais[animal1.name] = animal1.residents.length;
    });
    return ObjAnimais;
  }
  if (Object.entries(animal).length === 1) {
    const retornaspecies = data.species.find((spe) => spe.name === animal.specie);
    return retornaspecies.residents.length;
  }
  if (Object.entries(animal).length === 2) {
    const acharName = data.species.find((name) => name.name === animal.specie);
    return acharName.residents.filter((sex1) => sex1.sex === animal.sex).length;
  }
}
// console.log(countAnimals());
module.exports = countAnimals;
