var context = 		require('./../commandContext.js').main;
var common = 		require('./../../common.js');
var economics =     require('./../../economics/economics.js');

exports.applies = function(input, game) {
    if (!context.includes('main') && !context.includes('econ')) return false;
    return (input == 'econ');
};

exports.execute = function(input, game) {
    var description = economics.describePlayerWealth();
    common.out(description);
    context.switchTo('econ');
};