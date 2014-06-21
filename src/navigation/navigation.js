var game = 		require('./../game/game.js');
var constants = require('../constants.js');
var _ = 		require('underscore-node');


exports.describeCurrentPosition = function() {
    var playerPosition = game.main.player.ship.position;
	return 'You are at "' + playerPosition.place.name + '" (nav beacon ' + playerPosition.place.beacon + '), ' +
	  	   'in the ' + playerPosition.system.name + ' system, ' +
	       'which is in the ' + playerPosition.region.name + ' region ' +
	       'of the ' + playerPosition.galaxy.name + ' galaxy.';
};

exports.getPlacesInCurrentSystem = function() {
    return game.main.player.ship.position.system.places;
};

exports.getCurrentPlace = function() {
    return game.main.player.ship.position.place;
};

exports.isWarpDestinationValid = function(beacon) {
    var playerPosition = game.main.player.ship.position;
    var place = _.find(playerPosition.system.places, function(item) { return item.beacon == beacon; });
	return place != null;
};

exports.warpTo = function(beacon) {
    var playerPosition = game.main.player.ship.position;
    var place = _.find(playerPosition.system.places, function(item) { return item.beacon == beacon; });
	playerPosition.place = place;
	return place;
};

exports.isJumpGatePresent = function() {
    return (game.main.player.ship.position.place.type == constants.placeType.JUMPGATE);
};

exports.useJumpGate = function() {
    var playerPosition = game.main.player.ship.position;
    var destination = playerPosition.place.jumpCoordinates;
    playerPosition.galaxy = destination.galaxy;
    playerPosition.region = destination.region;
    playerPosition.system = destination.system;
    playerPosition.place = destination.place;
    return playerPosition;
};