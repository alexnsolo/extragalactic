var context = 	require('./../commandContext.js');
var menu = 		require('./../../interfaces/menu.js');
var game =		require('./../../game/game.js');

exports.name = 'menu';

exports.execute = function(input) {
	game.save();
	context.switchTo('menu');
	menu.show();
};