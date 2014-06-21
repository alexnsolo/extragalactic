var context = 	require('./../commandContext.js').main;
var common = 	require('./../../common.js');

exports.applies = function(input, game) {
	if (!context.includes('main')) return false;
	return (input == 'main');
};

exports.execute = function(input, game) {
	context.switchTo('main');
};