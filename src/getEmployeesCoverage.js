const data = require('../data/zoo_data');
const {
  species,
  employees,
} = require('../data/zoo_data');
// quando recebo uma chave com name/sobrenome ou id, a função me retorna o primeiro nome da pessoa.
const getFirstName = (coverage) => employees.find((name1) => name1.id === coverage.id
  || name1.firstName === coverage.name || name1.lastName === coverage.name).firstName;
// quando recebo uma chave com name/sobrenome ou id, a função me retorna o segundo nome da pessoa.
const getLastName = (coverage) => employees.find((name2) => name2.id === coverage.id
  || name2.firstName === coverage.name || name2.lastName === coverage.name).lastName;
// quando recebo uma chave com name/sobrenome ou id, a função me retorna o id da pessoa.
const getId = (coverage) => employees.find((id1) => id1.id === coverage
  || id1.id === coverage.id || id1.firstName === coverage.name
  || id1.lastName === coverage.name).id;
// apos receber uma chave sendo nome/sobrenome ou id essa função me retorna um array com os ids dos animais que ela é responsavel.
const getLoc = (coverage) => {
  const responsabilite = employees.find((id) => id.id === coverage.id
  || id.firstName === coverage.name || id.lastName === coverage.name).responsibleFor;
  return responsabilite;
};
// Agora eu preciso transformar meu array recebido da getloc para nomes, pois estava recebendo
// em formato de id, com a ajuda de colegas da trybe, a função getNames transforma
// o array dos id em nomes.
const getNames = (responsableAnimals) => {
  const pegar = getLoc(responsableAnimals);
  return pegar.map((animalId) => species.find(({
    id,
  }) => animalId === id).name);
};
// Usando a mesma logica da função getNames, a função getLocations transforma meu array
// recebido em getloc na localização dos meus animais.
const getLocations = (coverage) => {
  const pegar = getLoc(coverage);
  return pegar.map((animalId) => species.find(({
    id,
  }) => animalId === id).location);
};
// minha função propet me retorna um objeto conforme a chave name/sobrenome ou id.
const Propet = (coverage) => {
  let obj2 = {};
  obj2 = {
    id: getId(coverage), // id da pessoa
    fullName: `${getFirstName(coverage)} ${getLastName(coverage)}`, // nome completo: firstName + lastName
    species: getNames(coverage), // espécies as quais a pessoa é responsável
    locations: getLocations(coverage), // Um array contendo todas as localizações das espécies
  };
  return obj2;
};
// minha função semParametro me retorna um array contendo todos os meus funcionarios
// caso o parametro não exista.
const semParametro = (parametro) => {
  const obj = [];
  Object.keys(employees).forEach((days) => {
    obj[days] = {
      id: employees[days].id, // id da pessoa
      fullName: `${employees[days].firstName} ${employees[days].lastName}`, // nome completo: firstName + lastName
      species: employees[days].responsibleFor.map((animalId1) => species.find(({
        id,
      }) => animalId1 === id).name),
      locations: employees[days].responsibleFor.map((animalId2) => species.find(({
        id,
      }) => animalId2 === id).location),
    };
  });
  return obj;
};
// função abaixo verifica se o parametro recebido é de fato um funcionario.
const verifcId1Name = (data1) => employees.some((valid) => valid.id === data1.id
|| valid.firstName === data1.name || valid.lastName === data1.name);
// minha função principal,
// na linha 77 verifica se recebeu algum parametro,
// se não recebeu retorna a minha função sem parametro.
// na linha 80 verifica se o parametro chave recebido é de fato um funcionario
// caso todas as opçoes forem falsas, a função me retorna a ficha do meu funcionario.
function getEmployeesCoverage(parametro) {
  if (!parametro) {
    return semParametro(parametro);
  }
  if (verifcId1Name(parametro) === false) {
    throw new Error('Informações inválidas');
  }
  return Propet(parametro);
}
//  console.log(getEmployeesCoverage('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
//  console.log(verifcId1({ name: 'Spr' }))
//  console.log(getLoc({ name: 'Elser' }));
// console.log(Propet({ name: 'Elser' }))

module.exports = getEmployeesCoverage;
