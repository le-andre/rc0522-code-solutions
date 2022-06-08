var carousels = document.querySelectorAll('.carousel');
var nextImage = document.querySelector('#right');
var previousImage = document.querySelector('#left');
var icons = document.querySelectorAll('.fa-circle');
// var timer = 3;
var index = 0;

nextImage.addEventListener('click', nextFunction);
function nextFunction(event) {
  if (index === 4) {
    index = 0;
    icons[0].className = 'fa-solid fa-circle';
    icons[4].className = 'fa-regular fa-circle';
    carousels[0].className = 'carousel';
    carousels[4].className = 'carousel hidden';
  } else if (carousels[index].className === 'carousel') {
    icons[index].className = 'fa-regular fa-circle';
    carousels[index].className = 'carousel hidden';
    index++;
    icons[index].className = 'fa-solid fa-circle';
    carousels[index].className = 'carousel';
  }
}

previousImage.addEventListener('click', previousFunction);
function previousFunction(event) {
  if (index === 0) {
    index = 4;
    icons[0].className = 'fa-regular fa-circle';
    icons[4].className = 'fa-solid fa-circle';
    carousels[4].className = 'carousel';
    carousels[0].className = 'carousel hidden';
  } else if (carousels[index].className === 'carousel') {
    carousels[index].className = 'carousel hidden';
    icons[index].className = 'fa-regular fa-circle';
    index--;
    icons[index].className = 'fa-solid fa-circle';
    carousels[index].className = 'carousel';
  }
}
