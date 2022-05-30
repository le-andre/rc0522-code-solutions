/* exported includes */
/* when the function includes is called with two parameters, array and value,
in the opening codeblock we have a forloop that will loop through the index of
the array if it's equal to the value parameter. if the array's index is equal to the value
parameter, return true, else, return false . */
function includes(array, value) {
  for (var i = 0; i <= array.length; i++) {
    var valueOf;
    if (array[i] === value) {
      valueOf = true;
      return valueOf;
    } else {
      valueOf = false;
    }
  } return valueOf;
}

