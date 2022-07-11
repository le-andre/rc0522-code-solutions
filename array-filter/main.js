const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

function isEven(num) {
  let newObject = [];
  for (let i = 0; i <= num; i++) {
    if (num % 2 === 0) {
      newObject += num;
      return newObject;
    }
  } return false;
}
const evenNumbers = numbers.filter(isEven);
console.log('evenNumbers:', evenNumbers);

function isOverFive(num) {
  let newObject = [];
  for (let i = 0; i <= num; i++) {
    if (num > 5) {
      newObject += num;
      return newObject;
    }
  }
}
const overFive = numbers.filter(isOverFive);
console.log('overFive:', overFive);

function isStartWithE(name) {
  let newObject = [];
  for (let i = 0; i <= names.length; i++) {
    if (name[0] === 'E') {
      newObject += name;
      return newObject;
    }
  }
}

const startWithE = names.filter(isStartWithE);
console.log('startWithE:', startWithE);

function isHaveD(name) {
  let newObject = [];
  for (let i = 0; i <= names.length; i++) {
    if (name[i] === 'D' || name[i] === 'd') {
      newObject += name;
      return newObject;
    }
  }
}

const haveD = names.filter(isHaveD);
console.log('haveD:', haveD);
