/* exported getLastChar */
/* When calling the function getLastChar with the parameter string, A forloop
will start from the last index of the character and will return the last character of the parameter. */
function getLastChar(string) {
  var getLastCharResult = [];
  for (var i = 0; i < string.length; i++) {
    getLastCharResult = string[i];
  }
  return getLastCharResult;
}
/* When calling the function getLastChar with the parameter string, A forloop
will start from the beginning character of the string and will stop at the end of the string. The value that is returned
is from the index where the forloop stopped at. */
