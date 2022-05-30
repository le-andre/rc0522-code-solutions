/* exported ransomCase */
function ransomCase(string) {
  var ransomeCaseResult = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomeCaseResult += string.substring(i, i + 1).toLowerCase();
    } else {
      ransomeCaseResult += string.substring(i, i + 1).toUpperCase();
    }
  }
  return ransomeCaseResult;
}
