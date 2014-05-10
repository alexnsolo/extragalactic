var common = require('./../common.js');

exports.applies = function(input, game) {
	return (input == 'exit');
};

exports.execute = function(input, game) {
	common.out('Good-bye space.');
	process.exit(0);
};
