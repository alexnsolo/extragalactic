var context = require('./commandContext.js');
var common = require('./../common.js');

exports.applies = function(input, game) {
	if (!context.includes('init')) return false;
	return (input == 'begin');
};

exports.execute = function(input, game) {

	common.out(
		'           _                         _            _   _      ' + '\n' +
		'          | |                       | |          | | (_)     ' + '\n' +
		'  _____  _| |_ _ __ __ _  __ _  __ _| | __ _  ___| |_ _  ___ ' + '\n' +
		' / _ \\ \\/ / __| `__/ _` |/ _` |/ _` | |/ _` |/ __| __| |/ __|' + '\n' +
		'|  __/>  <| |_| | | (_| | (_| | (_| | | (_| | (__| |_| | (__ ' + '\n' +
		' \\___/_/\\_\\\\__|_|  \\__,_|\\__, |\\__,_|_|\\__,_|\\___|\\__|_|\\___|' + '\n' +
		'                          __/ |                              ' + '\n' +
		'                         |___/        						  '
	);

	common.out('Hello space.');
	context.switchTo('main');
};