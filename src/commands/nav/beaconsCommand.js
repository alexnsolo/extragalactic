var common = 		require('./../../common.js');
var navigation = 	require('./../../navigation/navigation.js');
var S = 			require('string');
var _ = 			require('underscore-node');

exports.execute = function(input) {
	common.out('The navigation console outputs: ');
	var places = navigation.getPlacesInCurrentSystem();
	_.each(places, function(place) {
		var content = '  [{{beacon}}] {{name}}';
		var description = S(content).template(place).s;
		common.out(description);
	});
};