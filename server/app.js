require('dotenv').config({path: 'variables.env'});

const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
  console.log('Express is running');
});


app.use(express.static(path.join(__dirname, 'client/dist')));








app.get('/', (req, res) => {
  res.send('Yeay');
});