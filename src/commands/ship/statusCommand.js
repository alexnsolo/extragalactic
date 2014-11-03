var common = 	require('./../../common.js');
var _ = 		require('underscore-node');
var colors = 	require('colors');
var game =		require('./../../game/game.js');

function describeStatus(ship) {
	var assessmentText = 'The ship is in good condition.';
	var shipHealth = ship.health / ship.maxHealth;
	if (shipHealth < 1) {
		assessmentText = 'The ship is lightly damaged.';
	}
	if (shipHealth < 0.8) {
		assessmentText = 'The ship is moderately damaged.';
	}
	if (shipHealth < 0.4) {
		assessmentText = 'The ship is heavily damaged.';
	}
	if (shipHealth < 0.2) {
		assessmentText = 'The ship is severely damaged.';
	}
	common.out('You run a diagnostic. ' + assessmentText + '\n');
	common.out('  Hull ' + common.healthBar(ship));
	common.out('  Subsystems:');
	_.each(ship.subsystems, function(subsystem) {
		common.out('    ' 
			+ subsystem.description + ' ' 
			+ '(' + subsystem.type + ') ' 
			+ common.healthBar(subsystem)
			);
	});
}

exports.execute = function(input) {
	describeStatus(game.main.player.ship);
};