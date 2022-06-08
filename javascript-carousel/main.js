var carousels = document.querySelectorAll('.carousel');
var nextImage = document.querySelector('#right');
var previousImage = document.querySelector('#left');
var icons = document.querySelectorAll('.fa-circle');
var index = 0;
var timer = setInterval(nextFunction, 3.0 * 1000);

nextImage.addEventListener('click', nextFunction);
function nextFunction(event) {
  if (index === 4) {
    clearInterval(timer);
    timer = setInterval(nextFunction, 3.0 * 1000);
    index = 0;
    icons[0].className = 'fa-solid fa-circle';
    icons[4].className = 'fa-regular fa-circle';
    carousels[0].className = 'carousel';
    carousels[4].className = 'carousel hidden';
  } else if (carousels[index].className === 'carousel') {
    clearInterval(timer);
    timer = setInterval(nextFunction, 3.0 * 1000);
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
    clearInterval(timer);
    timer = setInterval(nextFunction, 3.0 * 1000);
    index = 4;
    icons[0].className = 'fa-regular fa-circle';
    icons[4].className = 'fa-solid fa-circle';
    carousels[4].className = 'carousel';
    carousels[0].className = 'carousel hidden';
  } else if (carousels[index].className === 'carousel') {
    clearInterval(timer);
    timer = setInterval(nextFunction, 3.0 * 1000);
    carousels[index].className = 'carousel hidden';
    icons[index].className = 'fa-regular fa-circle';
    index--;
    icons[index].className = 'fa-solid fa-circle';
    carousels[index].className = 'carousel';
  }
}

/* for (var button of icons) {
  button.addEventListener('click', function (event) {
    for (var i = 0; i < icons.length; i++) {
      if (event.target === icons[0]) {
        clearInterval(timer);
        timer = setInterval(nextFunction, 3.0 * 1000);
        carousels[i].className = 'carousel hidden';
        carousels[0].className = 'carousel';
        icons[i].className = 'fa-regular fa-circle';
        icons[0].className = 'fa-solid fa-circle';
        index = 0;
      } else if (event.target === icons[1]) {
        clearInterval(timer);
        timer = setInterval(nextFunction, 3.0 * 1000);
        carousels[i].className = 'carousel hidden';
        carousels[1].className = 'carousel';
        icons[i].className = 'fa-regular fa-circle';
        icons[1].className = 'fa-solid fa-circle';
        index = 1;
      } else if (event.target === icons[2]) {
        clearInterval(timer);
        timer = setInterval(nextFunction, 3.0 * 1000);
        carousels[i].className = 'carousel hidden';
        carousels[2].className = 'carousel';
        icons[i].className = 'fa-regular fa-circle';
        icons[2].className = 'fa-solid fa-circle';
        index = 2;
      } else if (event.target === icons[3]) {
        clearInterval(timer);
        timer = setInterval(nextFunction, 3.0 * 1000);
        carousels[i].className = 'carousel hidden';
        carousels[3].className = 'carousel';
        icons[i].className = 'fa-regular fa-circle';
        icons[3].className = 'fa-solid fa-circle';
        index = 3;
      } else if (event.target === icons[4]) {
        clearInterval(timer);
        timer = setInterval(nextFunction, 3.0 * 1000);
        carousels[i].className = 'carousel hidden';
        carousels[4].className = 'carousel';
        icons[i].className = 'fa-regular fa-circle';
        icons[4].className = 'fa-solid fa-circle';
        index = 4;
      } else if (event.target === icons[5]) {
        clearInterval(timer);
        timer = setInterval(nextFunction, 3.0 * 1000);
        carousels[i].className = 'carousel hidden';
        carousels[5].className = 'carousel';
        icons[i].className = 'fa-regular fa-circle';
        icons[5].className = 'fa-solid fa-circle';
        index = 5;
      }
    }
  });
}
*/
for (var button of icons) {
  button.addEventListener('click', function (event) {
    for (var i = 0; i < carousels.length; i++) {
      if (icons[i] === event.target) {
        icons[i].className = 'fa-solid fa-circle';
        carousels[i].className = 'carousel';
        clearInterval(timer);
        timer = setInterval(nextFunction, 3.0 * 1000);
      } else {
        icons[i].className = 'fa-regular fa-circle';
        carousels[i].className = 'carousel hidden';
        clearInterval(timer);
        timer = setInterval(nextFunction, 3.0 * 1000);
      }
    }
  });
}
