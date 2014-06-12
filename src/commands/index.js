var commands = [
	require('./global/exitCommand.js'),
	require('./global/menuCommand.js'),
	require('./menu/startNewGameCommand.js'),
	require('./menu/loadGameCommand.js'),
	require('./main/mainCommand.js'),
	require('./main/timeCommand.js'),
	require('./main/waitCommand.js'),
	require('./main/shipCommand.js'),
	require('./main/navCommand.js'),
    require('./main/econCommand.js'),
    require('./ship/statusCommand.js'),
	require('./nav/locationsCommand.js'),
	require('./nav/warpCommand.js'),
	require('./nav/useJumpGateCommand.js')
];

exports.main = commands;