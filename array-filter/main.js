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
  return num % 2 === 0;
}
const evenNumbers = numbers.filter(isEven);
console.log('evenNumbers:', evenNumbers);

function isOverFive(num) {
  return num > 5;
}
const overFive = numbers.filter(isOverFive);
console.log('overFive:', overFive);

function isStartWithE(name) {
  return name.startsWith('E');
}
const startWithE = names.filter(isStartWithE);
console.log('startWithE:', startWithE);

function isHaveD(name) {
  return name.includes('D') || name.includes('d');
}
const haveD = names.filter(isHaveD);
console.log('haveD:', haveD);
