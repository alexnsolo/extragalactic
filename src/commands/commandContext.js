var game = require('./../game/game.js');
var _ = require('underscore-node');

exports.current = function() {
	return _.findWhere(exports.contexts, {name: game.main.contextName});
}

exports.is = function(contextName) {
	return game.main.contextName === contextName;
};

exports.switchTo = function(contextName) {
	game.main.contextName = contextName;
};

exports.contexts = [
	{
		name: 'init',
		commands: []
	},
	{
		name: 'menu',
		commands: [
			  require('./menu/startNewGameCommand.js')
			, require('./menu/loadGameCommand.js')
			, require('./global/exitCommand.js')
		]
	},
	{
		name: 'main',
		commands: [
			  require('./time/timeCommand.js')
			, require('./ship/shipCommand.js')
			, require('./nav/navCommand.js')
			, require('./economics/econCommand.js')
			, require('./global/exitCommand.js')
			, require('./global/menuCommand.js')
		]
	}
];