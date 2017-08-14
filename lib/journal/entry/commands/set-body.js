'use strict';

module.exports = function(type) {
  return function(body) {
    this.applyChange(type, { body: body });
  }
}
