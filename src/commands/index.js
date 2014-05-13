var commands = [
	require('./startNewGameCommand.js'),
	require('./loadGameCommand.js'),
	require('./exitCommand.js'),
	require('./menuCommand.js'),
	require('./shipCommand.js'),
	require('./timeCommand.js'),
	require('./waitCommand.js')
];

module.exports.main = commands;