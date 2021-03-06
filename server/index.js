const express = require('express');
const db = require('../database');
const app = express();
const path = require('path');
const PORT = 3000;


app.use(express.static('public'));
app.use(express.json());//this parses all json coming in the results
app.use(express.urlencoded());

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

app.get('/api/movies/filter', (req, res) => {//once you update the schema, you will need to change /filter to /filtered
  console.log('fetching filtered movies table');
  //does title appear in request body?
  //console.log(req.query.title);
  const sql = `SELECT * FROM movies WHERE title like '%${req.query.title}%'`;
  db.query(sql, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  } )
})

app.post('/api/movies', (req, res) => {
  const sql = `INSERT INTO movies (title, watched) VALUES ('${req.body.title}', 'false')`;
  db.query(sql, (err, data) => {
    if(err){
      res.send(err)
    } else {
      console.log('add movie successful!')
      res.send(data)
    }
  })

})
app.put('/api/movies',(req, res)=>{
  //console.log(req.body); //{ id: '4', watched: 'yes' }
  var sql;
  if(req.body.watched === 'yes'){
    sql=`UPDATE movies SET watched='false' WHERE id=${req.body.id}`;
  } else {
    sql = `UPDATE movies SET watched='yes' WHERE id=${req.body.id}`;
  }
  db.query(sql, (err, data) => {
    if(err){
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.delete('/api/movies', (req, res)=>{
  //console.log(req.body);
  var sql = `DELETE FROM movies WHERE id=${req.body.id}`;
  db.query(sql, (err, data) => {
    if(err){
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})