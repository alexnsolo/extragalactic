var context = require('./commandContext.js').main;
var common = require('./../common.js');

exports.applies = function(input, game) {
	if (!context.includes('main')) return false;
	
	var words = input.split(' ');
	return (words.length == 3 
			&& words[0] == 'wait')
			&& (words[2] == 'hours' || words[2] == 'hrs');
};

exports.execute = function(input, game) {
	var hours = parseInt(input.split(' ')[1]);
	game.main.time.waitHours(hours);
	common.out('The time is ' + game.main.time.currentTime());
};
