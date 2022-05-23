/* exported isLowerCased */
function isLowerCased(word) {
  var isLowerCasedResult = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      isLowerCasedResult = true;
      return isLowerCasedResult;
    }
    if (word[i] === word[i].toUpperCase()) {
      isLowerCasedResult = false;
      return isLowerCasedResult;
    }
  }
  return isLowerCasedResult;
}
