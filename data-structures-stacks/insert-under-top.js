/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const poppedValue = [];
    poppedValue.push(stack.pop());
    stack.push(value);
    stack.push(poppedValue[0]);
    return stack;
  }
}
