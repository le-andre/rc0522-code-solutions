const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'Query has failed.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const data = req.body;
  const sql = `
  select "name",
         "grade"
         "`;
  if (typeof data.grade === 'undefined' || typeof data.name === 'undefined' || typeof data.course === 'undefined' || typeof data.score === 'undefined') {
    res.status(400).json({
      error: 'missing required field'
    });
    return;
  }
  if (data.score < 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'Query has failed.'
      });
    });
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on 3000');
});
