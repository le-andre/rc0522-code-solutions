/* exported chunk */
function chunk(array, size) {
  var chunkResult = [];

  for (let i = 0; i < array.length; i += size) {
    chunkResult.push(array.slice(i, i + size));
  }

  return chunkResult;
}

