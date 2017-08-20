'use strict';

module.exports = function(type) {
  return function(author) {
    this.applyChange(type, { authorId: author.get('id') });
  }
}
