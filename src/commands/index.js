var commands = [
	require('./global/exitCommand.js'),
	require('./global/menuCommand.js'),
	require('./menu/startNewGameCommand.js'),
	require('./menu/loadGameCommand.js'),
	require('./main/mainCommand.js'),
	require('./main/timeCommand.js'),
	require('./main/waitCommand.js'),
	require('./main/shipCommand.js'),
	require('./ship/statusCommand.js'),
];

module.exports.main = commands;