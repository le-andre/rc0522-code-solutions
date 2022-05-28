/* exported getFirstChar */
/* When calling the function getFirstChar with the parameter string,
the forloop will start from the beginning of the value, and will return the first character of the parameter string. */
function getFirstChar(string) {
  var getFirstCharResult = [];
  for (var i = 0; i < string.length; i++) {
    getFirstCharResult = string[0];
  }
  return getFirstCharResult;
}
