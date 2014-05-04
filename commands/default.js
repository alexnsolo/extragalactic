var common = require('./../common.js');

exports.applies = function(input) {
	return true;
};

exports.execute = function(input) {
	if (input.length > 0) {
		common.out('An echo rings out, \'' + input + '\'.');
	}
	else {
		common.out('Silence fills the void.');
	}
};