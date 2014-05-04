var common = require('./../common.js');

exports.applies = function(input) {
	return (input == 'begin');
};

exports.execute = function(input) {
	common.out('Hello space.');
};