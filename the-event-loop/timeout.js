console.log('Hello, just a moment...');
setTimeout(() => {
  console.log('Thanks for waiting!');
}, '2000');
setInterval(() => {
  let currentCount = 3;
  for (let i = currentCount; i >= 0; i--) {
    currentCount--;
    console.log(i);
  }
}, '1000');
