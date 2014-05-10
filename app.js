var commands = require('./commands/index.js').main;
var common = require('./common.js');
var game = require('./game/game.js').main;
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
};

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

// start the game
common.out(
	'           _                         _            _   _      ' + '\n' +
	'          | |                       | |          | | (_)     ' + '\n' +
	'  _____  _| |_ _ __ __ _  __ _  __ _| | __ _  ___| |_ _  ___ ' + '\n' +
	' / _ \\ \\/ / __| `__/ _` |/ _` |/ _` | |/ _` |/ __| __| |/ __|' + '\n' +
	'|  __/>  <| |_| | | (_| | (_| | (_| | | (_| | (__| |_| | (__ ' + '\n' +
	' \\___/_/\\_\\\\__|_|  \\__,_|\\__, |\\__,_|_|\\__,_|\\___|\\__|_|\\___|' + '\n' +
	'                          __/ |                              ' + '\n' +
	'                         |___/        						  ' + '\n'
);

common.out('Hello space. \n');
context.switchTo('main');
getCommand();
