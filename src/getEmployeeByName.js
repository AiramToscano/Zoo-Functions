const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((funcionarios) => funcionarios.lastName === employeeName
  || funcionarios.firstName === employeeName);
}

//  console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
