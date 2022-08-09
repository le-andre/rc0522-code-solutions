/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const poppedValue = [];
    const peekValue = [];
    poppedValue.push(stack.pop());
    peekValue.push(stack.peek());
    stack.push(poppedValue[0]);
    return peekValue[0];
  }
}
