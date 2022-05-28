/* exported includes */
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
