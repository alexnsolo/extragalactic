var common = require('./../common.js');

exports.applies = function(input, game) {
	return true;
};

exports.execute = function(input, game) {
	if (input.length > 0) {
		common.out('An echo rings out, \'' + input + '\'.');
	}
	else {
		common.out('Silence fills the void.');
	}
};