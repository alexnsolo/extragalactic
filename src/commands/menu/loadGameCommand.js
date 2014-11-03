var common = 	require('./../../common.js');
var game =		require('./../../game/game.js');

exports.name = 'load';

exports.execute = function(input) {
    game.load();
	common.out('Hello space.')
};
