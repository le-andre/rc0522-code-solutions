/* exported removeNext */

function removeNext(list) {
  const next = list.next;
  if (next === null) {
    return undefined;
  }
  list.next = next.next;
  return list.next;
}
