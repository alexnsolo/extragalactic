var commands = require('./commands/index.js').main;
var common = require('./common.js');
var game = require('./game/game.js');
var menu = require('./interfaces/menu.js');
var context = require('./commands/commandContext.js').main;
var _ = require('underscore-node');
var S = require('string');

function doCommand(input) {
	common.out('');

	if (S(input).isEmpty()) {
		common.out('Silence fills the void.');
	}
	else {
		var command = _.find(commands, function(command) { return command.applies(input, game) });
		if (command != null) {
			command.execute(input, game);
		}
		else {
			common.out('An echo rings out, \'' + input + '\'.');
		}
	}

	common.out('');

	// ad infinitum
	getCommand();
}

function getCommand() {
	prompt.get([{name: 'command', message: '>'.green}], 
		function(err, result) {
			doCommand(result.command);
		}
	);
}

// setup a prompt to accept commands
var prompt = require('prompt');
prompt.start();
prompt.message = '';
prompt.delimiter = '';

// show the menu
context.switchTo('menu');
menu.show();

getCommand();
