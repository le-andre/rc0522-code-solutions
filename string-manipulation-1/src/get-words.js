/* exported getWords */
function getWords(string) {
  if (string.length >= 1) {
    return string.split([' ']);
  } else {
    return [];
  }
}
