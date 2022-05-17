var student = {
  firstName: 'Andre',
  lastName: 'Le',
  age: 26
};

student.livesInIrvine = false;
student.previousOccupation = 'Audio Video Technician';

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
console.log('value of student.liveInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'honda',
  model: 'civic',
  year: '1995'
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = false;

console.log('value of vehicle[\'color\']', vehicle['color']);
console.log('value of vehicle[\'isConvertible\']', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'cat',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
