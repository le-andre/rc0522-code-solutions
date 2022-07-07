const express = require('express');
const app = express();
const dataObject = require('./data.json');
const fs = require('fs');
let nextID = dataObject.nextId;
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
  if (typeof newObject.content === 'undefined') {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }
  newObject.id = id;
  dataObject.notes[id] = newObject;
  dataObject.nextId++;
  fs.writeFile('data.json', JSON.stringify(dataObject, null, 2), 'utf8', err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occured'
      });
    } else {
      res.status(201).json(newObject);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 1) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }
  if (typeof dataObject.notes[id] === 'undefined') {
    res.status(404).json({
      error: 'cannot find note with id: ' + id
    });
    return;
  }
  delete dataObject.notes[id];
  fs.writeFile('data.json', JSON.stringify(dataObject, null, 2), 'utf8', err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occured'
      });
    } else {
      res.sendStatus(204);
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 1) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }
  const newObject = req.body;
  if (typeof newObject.content === 'undefined') {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }
  if (typeof dataObject.notes[id] === 'undefined') {
    res.status(404).json({
      error: 'cannot find note with id: ' + id
    });
    return;
  }
  newObject.id = id;
  dataObject.notes[id] = newObject;
  dataObject.nextId++;
  fs.writeFile('data.json', JSON.stringify(dataObject, null, 2), 'utf8', err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occured'
      });
    } else {
      res.status(200).json(newObject);
    }
  });
});

// eslint-disable-next-line no-console
app.listen(3000, console.log('listening at 3000!'));
