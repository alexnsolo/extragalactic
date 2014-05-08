var common = require('./../common.js');

exports.applies = function(input, game) {
	return (input == 'time');
};

exports.execute = function(input, game) {
	common.out('The time is ' + game.time.currentTime());
};
