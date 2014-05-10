var commands = require('./commands/index.js').main;
var common = require('./common.js');
var game = require('./game/game.js').main;

function doCommand(input) {
	common.out('');

	if (input == 'exit') {
		common.out('Good-bye space.');
		return;
	}

	for (var i=0;i<commands.length;i++) {
		if (commands[i].applies(input, game)) {
			commands[i].execute(input, game);
			break;	
		}
	}

	common.out('');

	// ad infinitum
	prompt.get([{name: 'command', message: '>'.green}], 
		function(err, result) {
			doCommand(result.command);
		}
	);
};


var prompt = require('prompt');
prompt.start();
prompt.message = '';
prompt.delimiter = '';

doCommand('begin');