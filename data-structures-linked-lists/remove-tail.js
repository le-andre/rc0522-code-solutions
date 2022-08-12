/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return undefined;
  }
  while (list.next.next !== null) {
    list = list.next;
  }
  list.next = null;
  return list.next;
}
