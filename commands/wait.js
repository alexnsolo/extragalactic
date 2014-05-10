var context = require('./commandContext.js');
var timeCommand = require('./timeCommand.js');

exports.applies = function(input, game) {
	if (!context.includes('main')) return false;
	
	var words = input.split(' ');
	return (words.length == 3 
			&& words[0] == 'wait')
			&& (words[2] == 'hours' || words[2] == 'hrs');
};

exports.execute = function(input, game) {
	var hours = parseInt(input.split(' ')[1]);
	game.time.waitHours(hours);
	timeCommand.execute(input, game);
};
