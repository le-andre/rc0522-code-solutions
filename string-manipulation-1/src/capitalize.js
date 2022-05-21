/* exported capitalize */
/* When the function capitalize is called with a word parameter,
 the for loop will run the beginning at index 0 of word and will run until the end of the word index. an if statement will check if
 its the first character of the index is lowercase, and if it is, capitalize that character. else, lowercase that character.
 The return value will be the original word with the first character uppercased
 and the rest will be lowercased. */

function capitalize(word) {
  var capitalizeResult = [];
  for (var i = 0; i < word.length; i++) {
    if (word[(0)] === (word[(0)].toLowerCase())) {
      capitalizeResult = (word[0].toUpperCase());
    } else {
      capitalizeResult = word[i].toLowerCase();
    }
  }
  return capitalizeResult;
}
