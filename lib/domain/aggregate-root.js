'use strict';

const uuid = require('uuid/v4');

var Events = {
  CREATED: 'created'
}

function AggregateRoot() {
  this._events = [];
  this._domainModel = {};
}
AggregateRoot.prototype.applyChange = function(eventType, data) {
  var event = this.buildEvent(eventType, data);
  return this._applyEventToDomainModel(event);
}
AggregateRoot.prototype.buildEvent = function(eventType, data) {
  return {
    type: eventType,
    data: data
  }
}
AggregateRoot.prototype._applyEventToDomainModel = function(event) {
  if (this._domainEventHandlers[event.type]) {
    this._domainEventHandlers[event.type].call(this, event);
  }
  this._events.push(event);
}
AggregateRoot.prototype.create = function() {
  this.applyChange(Events.CREATED, { aggregateId: uuid() });
}
AggregateRoot.prototype._domainEventHandlers = {};
AggregateRoot.prototype._domainEventHandlers[Events.CREATED] = function(event) {
  this._domainModel.aggregateId = event.data.aggregateId;
}

module.exports = AggregateRoot;
