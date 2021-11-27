const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// funçao animalGet me da a disponibilidade durante a semana que o animal tem.
const animalGet = (scheduleTarget) => {
  const dates = data.species.find((animais) => animais.name === scheduleTarget);
  return dates.availability;
};
// Função Dayget monstra disponibilidade dos animais conforme passado um dia na semana
// execeto monday, pois retorna um array vazio
const dayGet = (scheduleTarget) => {
  const animaisDay6 = data.species.filter((name1) => name1.availability[0] === scheduleTarget
      || name1.availability[1] === scheduleTarget || name1.availability[2] === scheduleTarget
      || name1.availability[3] === scheduleTarget || name1.availability[4] === scheduleTarget)
    .map((array) => `${array.name}`);
  return animaisDay6;
};
// função getDay recebe um parametro de dia da semana, e me retorna um objeto com a
// hora oficial de abertura e saida e os animais disponiveis naquele dia.
// caso seja domingo, me retorna que o zoo ta fechado.
// No principio tinha feito uma função officeHour, mas com ajuda de colegas vi que conseguia
// fazer a função no proprio objeto.
const getDay = (day) => {
  const obj1 = {};
  if (day === 'Monday') {
    obj1[day] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  } else {
    obj1[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: dayGet(day),
    };
  }
  return obj1;
};
// minha função sem parametro me retorna um objeto atraves do for each
// com o calendario durante a semana, com todos os dias e horarios
// e seus respectivos animais disponivel
const semParametro = (scheduleTarget) => {
  const obj2 = {};
  Object.keys(data.hours).forEach((days) => {
    if (days === 'Monday') {
      obj2[days] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      obj2[days] = {
        officeHour: `Open from ${data.hours[days].open}am until ${data.hours[days].close}pm`,
        exhibition: dayGet(days),
      };
    }
  });
  return obj2;
};
// função abaixo verifica se o parametro recebido é de fato um dia na semana.
const verifcData = (data1) => Object.keys(hours).some((valid) => valid === data1);
// o codigo da linha 63 foi feita com ajuda de colegas da trybe, eu tinha que verificar
// se de fato o parametro passado era um animal, se fosse eu retornava o dia da semana que ele
// estara disponivel, a principio estava com dificuldade de chamar a função animal get para minha função principal
function getSchedule(scheduleTarget) {
  const animalvetor = data.species.map((animal) => animal.name);
  if (animalvetor.includes(scheduleTarget)) {
    return animalGet(scheduleTarget);
  }
  if (verifcData(scheduleTarget)) {
    return getDay(scheduleTarget);
  }
  return semParametro(scheduleTarget);
}
// a linha 67 verifica se a data é verdadeira, caso for ele me retorna o objeto com os parametros passados
// na linha 70 ele me retorna meu objeto agenda da semana se todas minhas condiçoes passadas forem falsas
// estava com dificuldades de enteder a logica, mas com ajuda de colegas fui capaz de solucionar.
//  console.log(getSchedule('lions'));

module.exports = getSchedule;
