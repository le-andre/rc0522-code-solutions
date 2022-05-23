/* exported toObject */
function toObject(keyValuePair) {
  var toObjectResult = {};
  for (var i = 0; i < keyValuePair.length; i++) {
    toObjectResult = keyValuePair.join(': ');
  }
  return toObjectResult;
}
