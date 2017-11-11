require('dotenv').config({path: 'variables.env'});

const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
  console.log('Express is running');
});


app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => {
  res.send('Yeay');
});