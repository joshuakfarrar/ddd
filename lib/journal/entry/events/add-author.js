'use strict';

const _ = require('lodash');

module.exports = function(data) {
  if (typeof this._domainModel.authors == 'undefined') {
    this._domainModel.authors = [data.authorId];
  } else if (_.includes(this._domainModel.authors, data.authorId)) {
    return;
  } else {
    this._domainModel.authors.push(data.authorId);
  }
}
