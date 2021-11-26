const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalGet = (scheduleTarget) => {
  const dates = data.species.find((animais) => animais.name === scheduleTarget);
  return dates.availability;
};

const dayGet = (scheduleTarget) => {
  const animaisDay6 = data.species.filter((name1) => name1.availability[0] === scheduleTarget
      || name1.availability[1] === scheduleTarget || name1.availability[2] === scheduleTarget
      || name1.availability[3] === scheduleTarget || name1.availability[4] === scheduleTarget)
    .map((array) => `${array.name}`);
  return animaisDay6;
};

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

const verifcData = (data1) => Object.keys(hours).some((valid) => valid === data1);

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

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
