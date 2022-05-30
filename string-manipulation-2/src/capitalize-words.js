/* exported capitalizeWords */

function capitalizeWords(string) {
  var capitalizeString = string.split(' ');
  for (var i = 0; i < capitalizeString.length; i++) {
    capitalizeString[i] = capitalizeString[i].charAt(0).toUpperCase() + capitalizeString[i].slice(1).toLowerCase();

  }
  var capitalizeResult = capitalizeString.join(' ');
  return capitalizeResult;
}
