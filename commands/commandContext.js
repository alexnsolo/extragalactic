var game = require('./../game/game.js').main;

function CommandContext() {
	this.includes = function(contextName) {
		return (game.context == contextName);
	};

	this.switchTo = function(contextName) {
		game.context = contextName;
	};
}

module.exports = new CommandContext();