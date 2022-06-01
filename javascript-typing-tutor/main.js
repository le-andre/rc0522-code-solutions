var currentIndex = document.querySelectorAll('span');
document.addEventListener('keydown', keyInput);

var index = 0;

function keyInput(event) {

  if (currentIndex[index].textContent === event.key) {
    currentIndex[index].classList.add('correct');
    currentIndex[index + 1].classList.add('current-index');
    currentIndex[index].classList.remove('current-index');
    currentIndex[index].classList.remove('wrong');
    index++;
  } else if (currentIndex[index].textContent !== event.key) {
    currentIndex[index].classList.add('wrong');
  }
}
