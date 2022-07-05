const express = require('express');
const app = express();
let nextID = 1;
const grades = {
};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const id in grades) {
    arr.push(grades[id]);
  }
  res.json(arr);
});

app.post('/api/grades', (req, res) => {
  // console.log('body:'req.body)
  // res.json('testing')   recommended to do these when creating post
  const newGrade = req.body;
  const id = nextID++;
  newGrade.id = id;
  grades[id] = newGrade;
  res.status(201).json(newGrade);
});

app.listen(3000);
