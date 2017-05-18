
var loggester = require('./loggester');
var log = new loggester.logger('SOME MODULE');

module.exports = function() {
  log('test2');
}
