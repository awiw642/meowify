require('dotenv').config({path: 'variables.env'});

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const db = require('../database/db');
const app = express();

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
  console.log('Express is running');
});


app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => {
  res.send('Yeay');
});

app.get('/fetch', (req, res) => {
  db.fetch((error, songs) => {
    if (error) {
      throw error;
    } else {
      res.json(songs);
      res.end();
    }
  })
});

app.post('/store', (req, res) => {
  db.save({
    artist: req.body.artist,
    title: req.body.title,
    genre: req.body.genre
  })
  .then(res.send('Updated'));
});