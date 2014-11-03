var context = 	require('./../commandContext.js');
var common = 	require('./../../common.js');
var game =		require('./../../game/game.js');

exports.name = 'start';

exports.execute = function(input) {
    game.startNew();
	context.switchTo('main');
	common.out('Hello space.')
};
