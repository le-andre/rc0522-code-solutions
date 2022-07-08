const takeAChance = require('./take-a-chance');
const promiseObject = takeAChance('Andre');

promiseObject.then(value => {
  console.log(value);
});

promiseObject.catch(error => {
  console.error(error);
});
