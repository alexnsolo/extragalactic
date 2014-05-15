var context = 		require('./../commandContext.js').main;
var common = 		require('./../../common.js');
var navigation = 	require('./../../navigation/navigation.js');

exports.applies = function(input, game) {
	if (!context.includes('main') && !context.includes('nav')) return false;
	return (input == 'nav');
};

exports.execute = function(input, game) {
	var location = navigation.getCurrentLocation();
	var description = 'You are at ' + location.place.name + ' (nav beacon ' + location.place.beacon + '), ' +
				  	  'in the ' + location.system.name + ' system, ' + 
				      'which is in the ' + location.region.name + ' region ' + 
				      'of the ' + location.galaxy.name + ' galaxy.';
	common.out(description);
	context.switchTo('nav');
};