const express = require('express');
const app = express();
app.use(express.json());
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
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
  const sql = {
    text: 'INSERT INTO grades(name, course, score) VALUES($1, $2, $3) RETURNING *'
  };
  const values = [data.name, data.course, data.score];
  if (!data.name || !data.course || !data.course) {
    res.status(400).json({
      error: 'missing name, course, or score'
    });
    return;
  }
  if (data.score < 0) {
    res.status(400).json({
      error: 'score is not an integer from 0 to 100'
    });
    return;
  }
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).send(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'Query has failed.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  const data = req.body;
  const query = `UPDATE "grades"
                 SET "name" = $1,
                     "course" = $2,
                     "score" = $3
                 WHERE "gradeId" = $4
                 RETURNING *
                     `;
  const values = [data.name, data.course, data.score, id];
  if (!data.name || !data.course || !data.score) {
    res.status(400).json({
      error: 'missing name,course or score'
    });
    return;
  }
  if (!id) {
    res.status(404).json({
      error: 'cannot find grade with id: ' + id
    });
    return;
  }
  db.query(query, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: 'cannot find grade with id: ' + id
        });
        return;
      }
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'Query has failed.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  const query = `DELETE from "grades"
                  WHERE "gradeId" = $1
                  RETURNING *
                  `;
  const values = [id];
  if (id <= 0) {
    res.status(400).json({
      error: 'invalid ID, must be an positive integer'
    });
    return;
  }

  db.query(query, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: 'cannot find grade with id: ' + id
        });
        return;
      }
      res.status(204).json({
        status: 'success',
        message: 'grade deleted!'
      });
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
