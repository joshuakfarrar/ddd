'use strict';

const _ = require('lodash');

module.exports = function(data) {
  let entry = this;
  let authors = entry.get('authors');

  let removeAuthorById = (authorIds, authorId) => {
    return _.filter(authorIds, (aId) => {
      return aId != authorId;
    });
  }

  entry.set('authors', removeAuthorById(authors, data.authorId));
}
