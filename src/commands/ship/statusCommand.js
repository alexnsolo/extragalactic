var context = 	require('./../commandContext.js').main;
var common = 	require('./../../common.js');
var _ = 		require('underscore-node');
var colors = 	require('colors');

function describeStatus(ship) {
	common.out('Hull: ' + common.healthBar(ship));
	common.out('Subsystems:');
	_.each(ship.subsystems, function(subsystem) {
		common.out('  ' 
			+ subsystem.description + ' ' 
			+ '(' + subsystem.type + ') ' 
			+ common.healthBar(subsystem)
			);
	});
}

exports.applies = function(input, game) {
	if (!context.includes('ship')) return false;
	return (input == 'status');
};

exports.execute = function(input, game) {
	describeStatus(game.main.player.ship);
};