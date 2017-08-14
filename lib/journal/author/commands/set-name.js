'use strict';

module.exports = function(type) {
  return function(name) {
    this.applyChange(type, { name: name });
  }
}
