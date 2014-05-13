var context = 	require('./../commandContext.js').main;
var common = 	require('./../../common.js');
var time = 		require('./../../time/time.js');

exports.applies = function(input, game) {
	if (!context.includes('main')) return false;
	return (input == 'time');
};

exports.execute = function(input, game) {
	common.out('The time is ' + time.currentTime());
};
