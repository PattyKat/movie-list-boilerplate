const express = require('express');
const db = require('../database');
const app = express();
const path = require('path');
const PORT = 3000;


app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(`${req.method} request coming in for ${req.url}`);
  next();
})

app.get('/api/movies', (req, res) => {
  console.log('fetching movies table');
  const sql = `SELECT * FROM movies`;
  db.query(sql, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  } )
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})