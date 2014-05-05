var common = require('./../common.js');

exports.applies = function(input, game) {
	return (input == 'begin');
};

exports.execute = function(input, game) {
	common.out('Hello space.');
};