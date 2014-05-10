var commands = [
	require('./begin.js'),
	require('./ship.js'),
	require('./timeCommand.js'),
	require('./wait.js'),
	
	require('./default.js')
];

module.exports.main = commands;