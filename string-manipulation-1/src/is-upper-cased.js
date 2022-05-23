/* exported isUpperCased */
function isUpperCased(word) {
  var isUpperCasedResult = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      isUpperCasedResult = true;
    } else {
      isUpperCasedResult = false;
    }
  }
  return isUpperCasedResult;
}
