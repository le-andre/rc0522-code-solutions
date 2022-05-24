var buttonOn = document.querySelector('button');
buttonOn.addEventListener('click', buttonToggle);

var rowOn = document.querySelector('.row');

var clickCounterResult = 0;

function buttonToggle(event) {
  clickCounterResult++;
  if ((clickCounterResult % 2) === 0) {
    buttonOn.classList.remove('on');
    rowOn.classList.remove('row-on', 'row');
    buttonOn.classList.add('off');
    rowOn.classList.add('row-off');
  } else {
    buttonOn.classList.remove('off');
    rowOn.classList.remove('row-off');
    buttonOn.classList.add('on');
    rowOn.classList.add('row');
  }
}
