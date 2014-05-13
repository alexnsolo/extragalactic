var context = require('./commandContext.js').main;
var common = require('./../common.js');

exports.applies = function(input, game) {
	if (!context.includes('menu')) return false;
	return (input == 'load');
};

exports.execute = function(input, game) {
    game.load();
	common.out('Hello space.')
};
