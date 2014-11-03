var common = 	require('./../../common.js');
var time = 		require('./../../time/time.js');

exports.name = 'time';

exports.execute = function(input, game) {
	common.out(time.currentTime());
};
