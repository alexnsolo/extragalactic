var context = require('./commandContext.js').main;
var common = require('./../common.js');

exports.applies = function(input, game) {
	if (!context.includes('main'), game) return false;
	return (input == 'time');
};

exports.execute = function(input, game) {
	common.out('The time is ' + game.time.currentTime());
};
