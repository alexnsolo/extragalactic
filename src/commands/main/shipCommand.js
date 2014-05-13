var context = 	require('./../commandContext.js').main;
var common = 	require('./../../common.js');
var _ = 		require('underscore-node');
var colors = 	require('colors');

function describeShip(ship) {
	common.out('The "' + ship.name + '"');
	common.out('------------------------------------------------')
	common.out(ship.description);
}

exports.applies = function(input, game) {
	if (!context.includes('main')) return false;
	return (input == 'ship');
};

exports.execute = function(input, game) {
	describeShip(game.main.player.ship);
	context.switchTo('ship');
};