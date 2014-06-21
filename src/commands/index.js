var commands = [
	require('./global/exitCommand.js'),
	require('./global/menuCommand.js'),
	require('./menu/startNewGameCommand.js'),
	require('./menu/loadGameCommand.js'),
	require('./main/mainCommand.js'),
	require('./time/timeCommand.js'),
	require('./time/waitCommand.js'),
	require('./ship/shipCommand.js'),
	require('./nav/navCommand.js'),
    require('./economics/econCommand.js'),
    require('./ship/statusCommand.js'),
    require('./ship/miningCommand.js'),
    require('./ship/cargoCommand.js'),
    require('./station/stationCommand.js'),
	require('./nav/beaconsCommand.js'),
	require('./nav/warpCommand.js'),
	require('./nav/useJumpGateCommand.js')
];

exports.main = commands;