/* exported tail */
/* When the function Tail is called with the parameter array, the for loop will
start counting from index [1] and those elements will be pushed into a new array. */

function tail(array) {
  var tailResult = [];
  for (var i = 1; i < array.length; i++) {
    tailResult.push(array[0 + i]);
  }
  return tailResult;
}
