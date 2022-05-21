/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  var isUnderFiveResult = number < 5;
  return isUnderFiveResult;
}

function isEven(number) {
  var isEvenResult = (number % 2) === 0;
  return isEvenResult;
}

function startsWithJ(string) {
  var startsWithJResult = string[(0)] === 'J';
  return startsWithJResult;
}

function isOldEnoughToDrink(person) {
  var isOldEnoughToDrinkResult = person.age > 20;
  return isOldEnoughToDrinkResult;
}

function isOldEnoughToDrive(person) {
  var isOldEnoughToDrinkResult = person.age > 15;
  return isOldEnoughToDrinkResult;
}

function isOldEnoughToDrinkAndDrive(person) {
  var isOldEnoughToDrinkAndDriveResult = (isOldEnoughToDrink > 20) === (isOldEnoughToDrive > 20);
  return isOldEnoughToDrinkAndDriveResult;
}

function categorizeAcidity(pH) {
  var categorizeAcidityResult = pH;

  if ((pH >= 0) || (pH <= 6.6)) {
    categorizeAcidityResult = 'Acid';
  }
  if ((pH >= 7.4) && (pH <= 14)) {
    categorizeAcidityResult = 'Base';
  }
  if ((pH === 7)) {
    categorizeAcidityResult = 'neutral';
  }
  if ((pH < 0) || (pH > 14)) {
    categorizeAcidityResult = 'invalid pH level';
  }
  return categorizeAcidityResult;
}

function introduceWarnerBro(name) {
  var introduceWarnerBroResult = name;
  if ((name === 'yakko') || (name === 'wakko')) {
    introduceWarnerBroResult = 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    introduceWarnerBroResult = "I'm, cute~";
  } else {
    introduceWarnerBroResult = 'Goodnight Everybody!';
  }

  return introduceWarnerBroResult;
}
