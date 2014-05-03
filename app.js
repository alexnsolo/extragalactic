function out(message) {
	console.log(message);
};

function doCommand(command) {
	if (command == 'begin') {
		out('Hello space.');
	}
	else if (command == 'exit') {
		out('Goodbye space.');
		return;
	}
	else {
		out('An echo rings out: ' + command);
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