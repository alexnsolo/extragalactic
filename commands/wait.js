var timeCommand = require('./timeCommand.js');

exports.applies = function(input, game) {
	return (input == 'wait');
};

exports.execute = function(input, game) {
	game.time.waitHours(1);
	timeCommand.execute(input, game);
};
