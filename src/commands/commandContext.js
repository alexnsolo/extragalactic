var game = require('./../game/game.js');
var _ = require('underscore-node');

function CommandContext() {
	this.includes = function(checkContext) {
		return _.some(game.main.contexts, function(context) { return context == checkContext; });
	};

	this.switchTo = function(context) {
		game.main.contexts = [context];
	};

    this.push = function(context) {
        game.main.contexts.push(context);
    };

    this.getTopmostContext = function() {
        return _.last(game.main.contexts);
    };
}

exports.main = new CommandContext();