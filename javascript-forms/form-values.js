var contactForm = document.querySelector('form');
console.log(contactForm);
contactForm.addEventListener('submit', contactFunction);

function contactFunction(event) {
  event.preventDefault();
  var newObject = {};
  newObject.name = contactForm.elements.name.value;
  newObject.email = contactForm.elements.email.value;
  newObject.message = contactForm.elements.message.value;
  console.log('Message Data:', newObject);
}
