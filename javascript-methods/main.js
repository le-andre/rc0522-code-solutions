
var numbers = [1, 5, 10];

var maximumValue = (Math.max(...numbers));

console.log('value of maximumValue:', maximumValue);

var heroes = ['Spiderman', 'Hulk', 'Batman', 'Superman'];

var randomNumber = (Math.random(numbers));

randomNumber = (randomNumber * heroes.length);

console.log('value of ', randomNumber);

var randomIndex = (Math.floor(randomNumber));
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[(randomIndex)];
console.log('value of randomHero:', randomHero);

var library = ['book1', 'book2', 'book3'];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library array:', library);

var fullName = 'Andre Le';

var firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
