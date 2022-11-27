/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  return new LinkedList(
    value, list.data, list.next.data, list.next.next.data, list.next.next.next.data
  );
}
