'use strict';

const _ = require('lodash');

module.exports = function(data) {
  this._domainModel.authors = _.filter(this._domainModel.authors, (authorId) => {
    return authorId != data.authorId;
  });
}
