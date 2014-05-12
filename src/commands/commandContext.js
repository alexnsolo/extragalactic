var game = require('./../game/game.js');

function CommandContext() {
	this.includes = function(contextName) {
		return (game.main.context == contextName);
	};

	this.switchTo = function(contextName) {
		game.main.context = contextName;
	};
}

exports.main = new CommandContext();