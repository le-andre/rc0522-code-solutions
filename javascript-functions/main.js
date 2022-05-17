function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

function getArea(width, height) {
  var rectangleArea = width * height;
  return rectangleArea;
}

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

function getLastElement(array) {
  var lastElementArray = array[3];
  return lastElementArray;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

var greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', getFirstNameResult);

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
