/* exported getKeys */
function getKeys(object) {
  var getKeysResult = [];
  for (var key in object) {
    getKeysResult.push(key);
  }
  return getKeysResult;
}
