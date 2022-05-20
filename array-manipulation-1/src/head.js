/* exported head */
/* When calling the function of head with the parameter array, the for loop will count from the beginning of the array,
and return the first element of the array. */

function head(array) {
  var headResult = array[0];
  for (var i = 0; i < array[1]; i++) {
    headResult = array[0];
  }
  return headResult;
}
