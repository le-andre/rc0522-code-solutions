function handleFocus(event) {
  console.log('focus was fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur was fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name', event.target.name);
  console.log('value of name:', event.target.value);
}

var userName = document.querySelectorAll('input');
userName.forEach(userName => {
  userName.addEventListener('focus', handleFocus);
  userName.addEventListener('blur', handleBlur);
  userName.addEventListener('input', handleInput);

});

var userMessage = document.querySelector('textarea');
userMessage.addEventListener('input', handleInput);
userMessage.addEventListener('blur', handleBlur);
userMessage.addEventListener('focus', handleFocus);
