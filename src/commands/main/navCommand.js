var context = 		require('./../commandContext.js').main;
var common = 		require('./../../common.js');
var navigation = 	require('./../../navigation/navigation.js');

exports.applies = function(input, game) {
	if (!context.includes('main') && !context.includes('nav')) return false;
	return (input == 'nav');
};

exports.execute = function(input, game) {
	var description = navigation.describeCurrentPosition();
	common.out(description);
	context.switchTo('nav');
};