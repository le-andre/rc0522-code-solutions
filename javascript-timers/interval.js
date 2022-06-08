var h1 = document.querySelector('h1');
function h1Edit() {
  h1.textContent = '~Earth Beeeelooowww Us~';
}

var time = 4;

function countDown() {
  h1.textContent = time--;
  if (time === -1) {
    clearInterval(nIntervID);
    h1Edit();
  }

}

var nIntervID = setInterval(countDown, 1000);
