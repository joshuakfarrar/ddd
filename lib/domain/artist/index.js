'use strict';

var util = require('util');

var AggregateRoot = require('../aggregate-root');
var ArtistEvents = require('./events/artist-events');

function Artist() {
  AggregateRoot.call(this);
}

util.inherits(Artist, AggregateRoot);

Artist.prototype.setName = function(name) {
  this.applyChange(ArtistEvents.SET_ARTIST_NAME, { name: name });
}
Artist.prototype._domainEventHandlers[ArtistEvents.SET_ARTIST_NAME] = function(event) {
  this._domainModel.name = event.data.name;
}

module.exports = Artist;
