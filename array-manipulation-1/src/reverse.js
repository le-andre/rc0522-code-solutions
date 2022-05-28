/* exported reverse */
function reverse(array) {
  var reverseResult = [];
  for (var i = array.length - 1; i > -1; i--) {
    reverseResult.push(array[i]);
  }
  return reverseResult;
}
