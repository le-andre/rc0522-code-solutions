/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  return string.substring(0, firstIndex) + string.charAt(secondIndex) + string.substring(firstIndex + 1, secondIndex) + string.charAt(firstIndex) + string.substring(secondIndex + 1, string.length);
}
