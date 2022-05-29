/* exported truncate */
/* when the function is called with two parameters, length and string,
what will be returned is the substring of the string, starting string at index of
the loop, and will end at the length. At the end of that, concatenate '...'. */

function truncate(length, string) {
  var truncateResult = [];
  for (var i = 0; i < length; i++) {
    truncateResult = string.substring(string[i], length) + '...';
  } return truncateResult;
}
