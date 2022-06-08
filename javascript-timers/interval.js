var h1 = document.querySelector('h1');
function h1Edit() {
  h1.textContent = '~Earth Beeeelooowww Us~';
}

var nIntervID = setInterval(countDown, 1.0 * 1000);
var time = 4;
function countDown() {
  h1.textContent = time - 1;
  time--;
  if (time <= 0) {
    clearInterval(nIntervID);
    h1Edit();
  }
}
