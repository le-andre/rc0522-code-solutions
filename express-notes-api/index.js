const express = require('express');
const app = express();
const dataObject = require('./data.json');
const fs = require('fs');
let nextID = 10;
app.use(express.json());

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const property in dataObject.notes) {
    arr.push(dataObject.notes[property]);
  } res.json(arr);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (dataObject.notes[id]) {
    res.status(200).json(dataObject.notes[id]);
  } else if (id < 1) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else {
    res.status(404).json({
      error: ' there is no note with the specified id'
    });
  }
});

app.post('/api/notes', (req, res) => {
  const newObject = req.body;
  const id = nextID++;
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({
      error: 'content is a required field'
    });
  } else {
    newObject.id = id;
    dataObject.notes[id] = newObject;
    fs.appendFile('data.json', JSON.stringify(newObject, null, 2), err => {
      if (err) {
        res.status(500).json({
          error: 'An unexpected error has occured'
        });

      }
    });
    res.status(201).json(newObject);
  }
});
// else if (Object.keys(req.body).length !== 0 && newObject ===1 ){
//     res.status(500).json(error: "An unexpected error occured")
//   }
// eslint-disable-next-line no-console
app.listen(3000, console.log('listening at 3000!'));
