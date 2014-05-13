var context = 	require('./../commandContext.js').main;
var common = 	require('./../../common.js');

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
