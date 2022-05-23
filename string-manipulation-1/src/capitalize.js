/* exported capitalize */
/* When the function capitalize is called with a word parameter,
 the for loop will run the beginning at index 0 of word and will run until the end of the word index. an if statement will check if
 its the first character of the index is lowercase, and if it is, capitalize that character. else, lowercase that character.
 The return value will be the original word with the first character uppercased
 and the rest will be lowercased. */

function capitalize(word) {
  var capitalizeResult = word.split('');
  for (var i = 0; i < word.length; i++) {
    capitalizeResult = word[0].toUpperCase() + word.substring(1).toLowerCase();

  }
  return capitalizeResult;
}

/* when the function capitalize is called with a word parameter,
the for loop will run from the beginning at index 0 of the string and will run until the end of the string.
the variable capitalizeResult will split the parameter into strings, and what is returned will be
the first character at index 0 uppercased, and the rest of the string will be lowercased. */
