var context = 		require('./../commandContext.js').main;
var common = 		require('./../../common.js');
var navigation = 	require('./../../navigation/navigation.js');

exports.applies = function(input, game) {
	if (!context.includes('nav')) return false;
	return (input == 'use jump gate');
};

exports.execute = function(input, game) {
	var valid = navigation.isJumpGatePresent();
	if (!valid) {
		common.out('The navigation console outputs:');
		common.out('  ERROR 294: JUMP GATE NOT PRESENT');
	}
	else {
		common.out('Your ship approaches the jump gate. As the hull crests the event horizon, ' +
				   'a bright flash fills your vision, then subsides as the ship exits warp. \n');
		var newPosition = navigation.useJumpGate();
		common.out('You are now in the ' + newPosition.system.name + ' system.');
	}
};