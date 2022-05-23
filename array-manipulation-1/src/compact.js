/* exported compact */
function compact(array) {
  var compactResult = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== 0 && array[i] !== undefined && array[i] !== ('') && Number.isNaN(array[i]) !== isNaN(NaN)) {
      compactResult.push(array[i]);
    }
  }
  return compactResult;

}
