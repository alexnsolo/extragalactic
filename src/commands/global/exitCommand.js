var context = 	require('./../commandContext.js');
var common = 	require('./../../common.js');
var game =		require('./../../game/game.js');

exports.name = 'exit';

exports.execute = function(input) {
	var exit = function() {
		common.out('Good-bye space.');
		process.exit(0);
	};
	if (context.is('main')) {
		game.save(exit);
	}
	else {
		exit();
	}
};
