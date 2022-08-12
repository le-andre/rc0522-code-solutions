/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const next = list.next;
  const third = list.next.next;
  next.next = list;
  list.next = third;
  return next;
}
