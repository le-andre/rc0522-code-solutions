/* exported toObject */
function toObject(keyValuePair) {
  var toObjectResult = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];

  toObjectResult[key] = value;
  return toObjectResult;
}
