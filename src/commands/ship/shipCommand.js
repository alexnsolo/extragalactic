var common = 	require('./../../common.js');
var _ = 		require('underscore-node');
var colors = 	require('colors');
var game =		require('./../../game/game.js');

function describeShip(ship) {
	common.out('The "' + ship.name + '"');
	common.out('------------------------------------------------')
	common.out(ship.description);
}

exports.name = 'ship';

exports.execute = function(input) {
	describeShip(game.main.player.ship);
};