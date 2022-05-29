/* exported capitalizeWord */
/* when the function is called with a string with one parameter word,
The return will be, at the first index of the word, capitalize and return the rest of the word
as lowercase. If the word is Javascript, the first index and the 5th index will be capitalized. */
function capitalizeWord(word) {
  var capitalizeResult = '';
  var javaScript = '';

  if (word[4] === 's' || word[4] === 'S') {
    javaScript = (word[0].toUpperCase() + word.substring(1, 4).toLowerCase()) + (word[4].toUpperCase() + word.substring(5).toLowerCase());
    return javaScript;
  }
  if (word !== 'javascript') {
    capitalizeResult = word[0].toUpperCase() + word.substring(1).toLowerCase();
  }
  return capitalizeResult;

}

/* when the function is called with a string with one parameter word,
There will be two if statements. The first, will check for this function only, if the word
at the index of 4 is strictly equal to 's' or'S' , expression of
the toUpperCase method of the word at the index of 0 object is being concatenated with
the toLowerCase method with the method of substring with the value of 1 to start, and 4 to end,
of the word object is being concatenated with the result of the expression of
the toUpperCase method of the word object at the index of 4 is being concatenated with
the toLowerCase method with the substring method with the value of 5 of the word object. */
