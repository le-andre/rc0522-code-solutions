
var clickCount = document.querySelector('.click-count');
clickCount.addEventListener('click', clickCount);

var clickCounterResult = 0;

var hotButton = document.querySelector('.hot-button');
hotButton.addEventListener('click', hotButtonFunction);

function hotButtonFunction(event) {
  clickCounterResult++;
  var temperature = '';
  if (clickCounterResult < 4) {
    temperature = 'cold';
  } else if (clickCounterResult < 7) {
    temperature = 'cool';
  } else if (clickCounterResult < 10) {
    temperature = 'tepid';
  } else if (clickCounterResult < 13) {
    temperature = 'warm';
  } else if (clickCounterResult < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  hotButton.className = 'hot-button ' + temperature;
  clickCount.textContent = 'Clicks: ' + clickCounterResult;
}
