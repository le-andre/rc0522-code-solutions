/* exported last */
/* When the function Last is called with the parameter array,
the for loop will start from the last index of the array and return that last element of the array. */
function last(array) {
  var lastResult = array[(array.length - 1)];
  for (var i = array.length - 1; i > array.length; i--) {
    lastResult = array[(array.length - 1)];
  }
  return lastResult;
}
