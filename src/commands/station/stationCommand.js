var context = 	    require('./../commandContext.js').main;
var common = 	    require('./../../common.js');
var navigation = 	require('./../../navigation/navigation.js');
var constants =     require('./../../constants.js');

function describeStation(place) {
    common.out('The "' + place.name + '"');
    common.out('------------------------------------------------');
    common.out(place.station.description);
}


exports.applies = function(input, game) {
    if (!context.includes('main')) return false;
    return (input == 'station');
};

exports.execute = function(input, game) {
    var currentPlace = navigation.getCurrentPlace();
    if (currentPlace.type != constants.placeType.STATION) {
        common.out('There is no station here.');
        return;
    }

    describeStation(currentPlace);

    context.push('station');
};