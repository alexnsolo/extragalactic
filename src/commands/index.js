var commands = [
	require('./startCommand.js'),
	require('./menuCommand.js'),
	require('./exitCommand.js'),
	require('./shipCommand.js'),
	require('./timeCommand.js'),
	require('./waitCommand.js')
];

module.exports.main = commands;