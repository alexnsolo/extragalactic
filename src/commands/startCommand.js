var context = require('./commandContext.js').main;
var common = require('./../common.js');

exports.applies = function(input, game) {
	if (!context.includes('menu')) return false;
	return (input == 'start');
};

exports.execute = function(input, game) {
    game.startNew();
	context.switchTo('main');
	common.out('Hello space.')
};
