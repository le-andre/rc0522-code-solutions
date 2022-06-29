/* exported pick */
/* the function pick will be called with two parameters, source and keys.
when called, if a key is listed in keys, but is not defined in source
return. Else, add property to a new Object. Return that object. */
function pick(source, keys) {
  let newObject = {};
  for (let i = 0; i <= source.length; i++) {
    if (source[i] !== keys) {
      newObject = source[i].value;
      return newObject;
    }
  }
}
