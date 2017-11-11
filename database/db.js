const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);

const songSchema = new mongoose Schema({
  Artist: String,
  Title: String,
  Genre: String
});

let Song = mongoose.model('Song', songSchema);

