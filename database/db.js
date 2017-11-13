const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(process.env.DATABASE);

const songSchema = new mongoose.Schema({
  artist: String,
  title: String
});

let Song = mongoose.model('Song', songSchema);

exports.save = (songDetail) => {
  let song = new Song(songDetail);
  song.save((error, song) => {
    if (error) {
      console.log(error);
    } else {
      console.log(song);
    }
  })
}

exports.fetch = (next) => {
  Song.find({}).exec(next);
}

