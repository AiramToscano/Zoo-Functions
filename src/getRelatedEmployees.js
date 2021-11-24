const data = require('../data/zoo_data');
// primeira funcao verifica se é um gerente,
// utilizo o some pra verificar se a pessoa gerencia alguem, caso ela gerencia
// apenas um ja basta.
function isManager(id) {
  return data.employees.some((idgerente) => idgerente.managers[0] === id
  || idgerente.managers[1] === id);
}
// segunda funçao verifico atravez do filter quais os nomes dos funcionarios do gerente
// logo depois utilizo o map para guardar em um novo array apenas os nomes do funcionarios
// mas antes verifico se o id passado é de fato um gerente.
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return data.employees.filter((manage) => (manage.managers[0] === managerId
    || manage.managers[1] === managerId))
    .map((new1) => `${new1.firstName} ${new1.lastName}`);
}

//  console.log(getRelatedEmployees('9'))

module.exports = {
  isManager,
  getRelatedEmployees,
};
