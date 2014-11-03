var common = 	    require('./../../common.js');
var navigation = 	require('./../../navigation/navigation.js');
var constants =     require('./../../constants.js');

function describeStation(place) {
    common.out('The "' + place.name + '"');
    common.out('------------------------------------------------');
    common.out(place.station.description);
}

exports.execute = function(input) {
    var currentPlace = navigation.getCurrentPlace();
    if (currentPlace.type != constants.placeType.STATION) {
        common.out('There is no station here.');
        return;
    }

    describeStation(currentPlace);
};