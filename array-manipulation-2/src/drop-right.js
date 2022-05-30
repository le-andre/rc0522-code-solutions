/* exported dropRight */
function dropRight(array, count) {
  for (var i = 0; i <= count; i++) {
    var value = array.slice(count - i, -i);

  } return value;
}

