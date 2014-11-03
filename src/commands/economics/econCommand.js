var common = 		require('./../../common.js');
var economics =     require('./../../economics/economics.js');

exports.name = 'econ';

exports.execute = function(input) {
    var description = economics.describePlayerWealth();
    common.out(description);
};