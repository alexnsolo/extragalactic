var commands = require('./commands/index.js');
var common = require('./common.js');

function doCommand(input) {
	if (input == 'exit') {
		common.out('Good-bye space.');
		return;
	}

	for (var i=0;i<commands.list.length;i++) {
		if (commands.list[i].applies(input)) {
			commands.list[i].execute(input);
			break;	
		}
	}

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