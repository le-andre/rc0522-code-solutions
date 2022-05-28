/* exported includesSeven */
function includesSeven(array) {
  var includesSevenResult = [];
  for (var i = -1; i < array.length; i++) {
    if (array[i] === 7) {
      includesSevenResult = true;
      return includesSevenResult;
    } else {
      includesSevenResult = false;
    }

  }
  return includesSevenResult;
}
