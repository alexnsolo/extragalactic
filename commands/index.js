var commands = [
	require('./beginCommand.js'),
	require('./shipCommand.js'),
	require('./timeCommand.js'),
	require('./waitCommand.js'),
	
	require('./defaultCommand.js')
];

module.exports.main = commands;