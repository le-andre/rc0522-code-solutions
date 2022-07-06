const express = require('express');
const app = express();
const dataObject = require('./data.json');
app.use(express.json());
app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const property in dataObject.notes) {
    arr.push(dataObject.notes[property]);
  } res.json(arr);

});

// eslint-disable-next-line no-console
app.listen(3000, console.log('listening at 3000!'));
