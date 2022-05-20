/* exported tail */
function tail(array) {
  var tailResult = [];
  for (var i = 1; i < array.length; i++) {
    tailResult.push(array[0 + i]);
  }
  return tailResult;
}
