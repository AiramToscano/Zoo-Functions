const data = require('../data/zoo_data');
// utilizo o find para encontrar o parametro que eu quero, ou seja
// encontrar meu objeto com nome e sobrenome do funcionario.
function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((funcionarios) => funcionarios.lastName === employeeName
  || funcionarios.firstName === employeeName);
}

//  console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
