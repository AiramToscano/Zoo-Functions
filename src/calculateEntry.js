const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];
// verifico se meu objeto não está vazio, caso esteja ou sem nada ele me retorna 0
function countEntrants(entrants1) {
  if (!entrants1 || Object.keys(entrants1).length === 0) {
    return 0;
  } // a principio utilizei obj vazio e nisso pecorrir um foreach para aplicar minha novas
  // keys com propriedade child adult e senior, mas o lint não estava passando, nisso,
  // verifiquei que eu podia criar na 'mao' meu objeto e verificar a quantidade atraves de um
  // filter, ou seja ele me retorna o tamanho das pessoas com uma determinada idade
  const obj = {
    child: entrants1.filter((age1) => age1.age < 18).length,
    adult: entrants1.filter((age1) => age1.age >= 18 && age1.age < 50).length,
    senior: entrants1.filter((age1) => age1.age >= 50).length,
  };
  return obj;
}
// a segunda função é apenas pra calcular,
// um pouco mais simples, preciso só importar meu objeto da minha primeira função,
// e depois calcular na mão a qunatidade de preços por idade.
function calculateEntry(entrants2) {
  const primeira = countEntrants(entrants2); // objeto da primeira função
  if (!entrants2 || Object.keys(entrants2).length === 0) {
    return 0;
  }
  if (Object.keys(entrants2.length > 0)) {
    const somachild = primeira.child * data.prices.child;
    const somaadult = primeira.adult * data.prices.adult;
    const somasenior = primeira.senior * data.prices.senior;
    const somaTotal = somachild + somasenior + somaadult;
    return somaTotal;
  }
}
// console.log(countEntrants(entrants));
// console.log(calculateEntry(entrants));
module.exports = {
  calculateEntry,
  countEntrants,
};
