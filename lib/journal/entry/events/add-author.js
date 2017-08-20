'use strict';

const _ = require('lodash');

module.exports = function(data) {
  let entry = this;
  let authors = entry.get('authors');

  if (_.includes(authors, data.authorId)) return;

  if (typeof authors == 'undefined') {
    entry.set('authors', [data.authorId]);
  } else {
    authors.push(data.authorId);
    entry.set('authors', authors);
  }
}
