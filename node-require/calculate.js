const plus = require('./add');
const minus = require('./subtract');
const times = require('./multiply');
const over = require('./divide');
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);
if (process.argv[3] === 'plus') {
  console.log('result:', plus(num1, num2));
} else if (process.argv[3] === 'minus') {
  console.log('result:', minus(num1, num2));
} else if (process.argv[3] === 'times') {
  console.log('result:', times(num1, num2));
} else if (process.argv[3] === 'over') {
  console.log('result:', over(num1, num2));
}
