/* exported take */
/* when the function take is called with the two parameters array and count,
in the forloop, the slice method of the array object with the values starting at the beginning and
stopping at the iteration of the loop, the result of that will be assigned to a new variable. That new variable
 will return a new array containing the count amount of elements of the array */
function take(array, count) {
  for (var i = 0; i <= count; i++) {
    var value = array.slice(0, i);

  } return value;
}
