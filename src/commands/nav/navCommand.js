var common = 		require('./../../common.js');
var navigation = 	require('./../../navigation/navigation.js');

exports.name = 'nav';

exports.execute = function(input) {
	var description = navigation.describeCurrentPosition();
	common.out(description);
};