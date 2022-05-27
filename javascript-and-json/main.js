var books = [
  { isbn: '', title: '', author: '' },
  { isbn: '', title: '', author: '' },
  { isbn: '', title: '', author: '' }
];
console.log('books array:', books);
console.log('typeof:', typeof (books));

console.log('stringify:', JSON.stringify(books));
console.log('stringify typeof:', typeof JSON.stringify(books));

var student = '{"id":"1702","name":"bob"}';
console.log('student typeof', typeof student);

console.log('Parse', JSON.parse(student));
