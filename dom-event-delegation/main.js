var taskListEvent = document.querySelector('.task-list');
taskListEvent.addEventListener('click', taskListEventFunction);

function taskListEventFunction(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var targetClosest = event.target.closest('.task-list-item');
    console.log('event.target.closest:', targetClosest);
    targetClosest.remove();
  }
}
