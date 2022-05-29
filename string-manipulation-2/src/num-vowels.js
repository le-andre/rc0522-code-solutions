/* exported numVowels */
function numVowels(string) {
  var vowelTotal = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      vowelTotal++;
    }
  } return vowelTotal;
}
