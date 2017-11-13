require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const Spotify = require('node-spotify-api');
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
    title: req.body.title
  });
  res.redirect('/');
});

app.post('/search', (req, res) => {

  const spotify = new Spotify({
    id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
  });

  spotify
    .search({type: 'track', query: req.body.keyword})
    .then((data) => {
      const tracks = [];
      data.tracks.items.forEach((track) => {
        const trackArtists = [];

        track.artists.forEach((artist) => {
          trackArtists.push(artist.name);
        })

        tracks.push({
          id: track.id,
          title: track.name,
          artists: trackArtists
        });
      });
      res.send(tracks);
      res.end();
    })
    .catch((error) => {
      console.error('Error occurred: ', error);
    })
});