/* exported last */
function last(array) {
  var lastResult = array[(array.length - 1)];
  for (var i = array.length - 1; i > array.length; i--) {
    lastResult = array[(array.length - 1)];
  }
  return lastResult;
}
