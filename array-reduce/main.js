const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];
const z = 0;
const i = 1;
const sum = numbers.reduce((x, y) => x + y, z);
console.log('sum:', sum);

const product = numbers.reduce((x, y) => x * y, i);
console.log('product:', product);

const balance = account.reduce((x, y) => y.type === 'deposit' ? x + y.amount : x - y.amount, z);
console.log('balance:', balance);

const composite = traits.reduce((x, y) => Object.assign(x, y));
console.log('composite:', composite);
