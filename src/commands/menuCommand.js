var context = require('./commandContext.js').main;
var common = require('./../common.js');
var menu = require('./../interfaces/menu.js');

exports.applies = function(input, game) {
	if (context.includes('menu')) return false;
	return (input == 'menu');
};

exports.execute = function(input, game) {
	context.switchTo('menu');
	menu.show();
};