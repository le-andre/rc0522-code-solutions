/* exported getValues */
function getValues(object) {
  var getValueResult = [];
  for (var key in object) {
    getValueResult.push(object[key]);
  }
  return getValueResult;
}
