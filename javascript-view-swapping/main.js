var tabContainerEvent = document.querySelector('.tab-container');
tabContainerEvent.addEventListener('click', tabContainerFunction);

var tabNodeList = document.querySelectorAll('.tab');

var viewNodeList = document.querySelectorAll('.view');

function tabContainerFunction(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabNodeList.length; i++) {
      if (tabNodeList[i] === event.target) {
        tabNodeList[i].className = 'tab active';
      } else {
        tabNodeList[i].className = 'tab';
      }
    }
    var dataValue = event.target.getAttribute('data-view');
    for (var u = 0; u < viewNodeList.length; u++) {
      if (viewNodeList[u].getAttribute('data-view') === dataValue) {
        viewNodeList[u].className = 'data-view';
      } else {
        viewNodeList[u].className = 'hidden';
      }
    }
  }
}
