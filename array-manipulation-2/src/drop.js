/* exported drop */
/* when the function drop is called with two parameters, array and count, with the iterations of
a for loop, the slice method of the array object with the values of count as the starting value, and it will end
at the iteration of the loop, is assigned to a new variable. The return value of that variable
should be a new array containing elements of that array after the count elements. */
function drop(array, count) {
  for (var i = 0; i <= array.length; i++) {
    var value = array.slice(count, i);

  } return value;
}
