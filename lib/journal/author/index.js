'use strict';

const util = require('util');
const { Aggregate, Event } = require('cqrs');

let Changes = {
  SET_NAME: 'set_name'
};

function Author() {
  Aggregate.call(this);
}
util.inherits(Author, Aggregate);

Author.prototype.setName = require('./commands/set-name')(Changes.SET_NAME);
Author.prototype._domainEventHandlers[Changes.SET_NAME] = require('./events/set-name');

module.exports = Author;
