/* exported maxValue */

function maxValue(stack) {
  const arr = [];
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    arr.push(stack.pop());
  }
  return Math.max(...arr);
}
