require('./javascript.js');
var common = require('./common.js');
var menu = require('./interfaces/menu.js');
var commandContext = require('./commands/commandContext.js');
var _ = require('underscore-node');
var S = require('string');

function doCommand(input) {
	common.out('');

	if (S(input).isEmpty()) {
		common.out('Available commands:');
		_.each(commandContext.current().commands, function(command) {
			common.out(' - ' + command.name);
		});
	}
	else {
		var commandName = input.split(' ')[0];
		var command = _.findWhere(commandContext.current().commands, {name: commandName});
		if (command != null) {
			command.execute(input);
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
commandContext.switchTo('menu');
menu.show();

getCommand();
