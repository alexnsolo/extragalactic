var commands = [
	require('./exitCommand.js'),
	require('./shipCommand.js'),
	require('./timeCommand.js'),
	require('./waitCommand.js')
];

module.exports.main = commands;