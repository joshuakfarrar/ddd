'use strict';

module.exports = function(type) {
  return function(title) {
    this.applyChange(type, { title: title });
  }
}
