'use strict';

const uuid = require('uuid/v4');
const util = require('util');
const { Aggregate, Event } = require('cqrs');

let Changes = {
  SET_TITLE: 'set_title',
  SET_BODY: 'set_body',
  ADD_AUTHOR: 'add_author',
  REMOVE_AUTHOR: 'remove_author'
};

function Entry() {
  Aggregate.call(this);
}
util.inherits(Entry, Aggregate);

Entry.prototype.setTitle = require('./commands/set-title')(Changes.SET_TITLE);
Entry.prototype.setBody = require('./commands/set-body')(Changes.SET_BODY);
Entry.prototype.addAuthor = require('./commands/add-author')(Changes.ADD_AUTHOR);
Entry.prototype.removeAuthor = require('./commands/remove-author')(Changes.REMOVE_AUTHOR);

Entry.prototype._domainEventHandlers[Changes.SET_TITLE] = require('./events/set-title');
Entry.prototype._domainEventHandlers[Changes.SET_BODY] = require('./events/set-body');
Entry.prototype._domainEventHandlers[Changes.ADD_AUTHOR] = require('./events/add-author');
Entry.prototype._domainEventHandlers[Changes.REMOVE_AUTHOR] = require('./events/remove-author');

module.exports = Entry;
