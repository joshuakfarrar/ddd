'use strict';

var util = require('util');

var AggregateRoot = require('../aggregate-root');
var TrackEvents = require('./events/track-events');

function Track() {
  AggregateRoot.call(this);
}

util.inherits(Track, AggregateRoot);

// command handlers
Track.prototype.setName = function(name) {
  this.applyChange(TrackEvents.SET_TRACK_NAME, { name: name });
}
Track.prototype.setArtist = function(artist) {
  this.applyChange(TrackEvents.SET_TRACK_ARTIST, { id: artist._domainModel.aggregateId });
}

// event handlers
Track.prototype._domainEventHandlers[TrackEvents.SET_TRACK_NAME] = function(event) {
  this._domainModel.name = event.data.name;
}
Track.prototype._domainEventHandlers[TrackEvents.SET_TRACK_ARTIST] = function(event) {
  this._domainModel.artist = event.data.id;
}

module.exports = Track;
