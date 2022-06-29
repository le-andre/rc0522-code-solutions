let counter = 3;
const i = setInterval(() => {
  if (counter === 0) {
    console.log('Blast Off!');
    clearInterval(i);

  } else {
    console.log(counter);
    counter--;
  }
}, 1000);
