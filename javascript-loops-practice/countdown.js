/* exported countdown */
function countdown(number) {
  var countdownResult = [];
  for (var i = number; i > -1; i--) {
    countdownResult.push(i);
  }
  return countdownResult;
}
