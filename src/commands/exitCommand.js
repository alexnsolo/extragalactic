var common = require('./../common.js');
var context = require('./commandContext.js').main;

exports.applies = function(input, game) {
	return (input == 'exit');
};

exports.execute = function(input, game) {
	var exit = function() {
		common.out('Good-bye space.');
		process.exit(0);
	};
	if (context.includes('main')) {
		game.save(exit);
	}
	else {
		exit();
	}
	
};
