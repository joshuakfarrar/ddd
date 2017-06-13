var Track = require('./index').Track;
var Artist = require('./index').Artist;

var artist = new Artist();
artist.create();
artist.setName('Abba');

var track = new Track();
track.create();
track.setName('Dancing Queen');
track.setName('Exogenesis');
track.setArtist(artist);
artist.setName('Muse');

console.log(track); // boom! event-sourcing!
console.log(artist);
