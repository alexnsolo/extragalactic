var context = 		require('./../commandContext.js').main;
var common = 		require('./../../common.js');
var navigation = 	require('./../../navigation/navigation.js');

exports.applies = function(input, game) {
	if (!context.includes('nav')) return false;

	var words = input.split(' ');
	return (words.length == 3 
			&& words[0] == 'warp'
			&& words[1] == 'to');
};

exports.execute = function(input, game) {
	common.out('You enter the coordinates into the navigation console. \n');
	var words = input.split(' ');
	var destination = words[2];
	var valid = navigation.isWarpDestinationValid(destination);
	if (!valid) {
		common.out('The navigation console outputs:');
		common.out('  ERROR 134: BEACON NOT FOUND');
	}
	else {
		common.out('The warp drive begins to hum in anticipation, as the ship ' + 
				   'gives a brief shudder, followed by the groaning of metal. ' +
				   'A bright flash fills your vision, then subsides as the ship exits warp. \n');
		var newLocation = navigation.warpTo(destination);
		common.out('You are now at ' + newLocation.name + ' (nav beacon ' + newLocation.beacon + ')');
	}
};