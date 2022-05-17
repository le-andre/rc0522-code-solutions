/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var getDescriptionOfPersonResult = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return getDescriptionOfPersonResult;
}
