const loggester = require('../app/loggester');
const log = new loggester('SOME MODULE');

module.exports = function() {
  log('test2');
};
