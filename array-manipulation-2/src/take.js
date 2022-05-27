/* exported take */
/* when the function take is called with two parameters array and count,
there will be a loop that will run according to how long the count is,
and will return the elements of the array in the parameter however long
the count is. */

function take(array, count) {
  for (var i = 0; i < count; i++) {
    var takeResult = [];
    takeResult.push(array[i]);

  }
  return takeResult;
}
