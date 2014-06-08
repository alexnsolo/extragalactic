var game = 		require('./../game/game.js');
var constants = require('../constants.js');
var _ = 		require('underscore-node');
var S = 		require('string');

function parsePosition(position) {
    var result = {};
    var universe = game.main.universe;
	result.galaxy = _.find(universe.galaxies, 		function(item) { return item.id == position.galaxyId; });
	result.region = _.find(result.galaxy.regions, 	function(item) { return item.id == position.regionId; });
	result.system = _.find(result.region.systems, 	function(item) { return item.id == position.systemId; });
	result.place  = _.find(result.system.places, 		function(item) { return item.id == position.placeId; });
	return result;
}

function PlayerPosition() {
	this.galaxy = null;
	this.region = null;
	this.system = null;
	this.place = null;

	this.parseGameData = function() {
		var position = parsePosition(game.main.player.position);
		this.galaxy = position.galaxy;
		this.region = position.region;
		this.system = position.system;
		this.place 	= position.place;
	};

	this.changePlaceTo = function(place) {
		this.place = place;
		game.main.player.position.placeId = place.id;
	};

	this.changePositionTo = function(position) {
		this.galaxy = position.galaxy;
		this.region = position.region;
		this.system = position.system;
		this.place 	= position.place;
		game.main.player.position.galaxyId = position.galaxy.id;
		game.main.player.position.regionId = position.region.id;
		game.main.player.position.systemId = position.system.id;
		game.main.player.position.placeId = position.place.id;
	}
}

var currentPosition = new PlayerPosition();

game.events.on('game-loaded', function() {
	currentPosition.parseGameData();
});


exports.describeCurrentPosition = function() {
	return 'You are at "' + currentPosition.place.name + '" (nav beacon ' + currentPosition.place.beacon + '), ' +
	  	   'in the ' + currentPosition.system.name + ' system, ' + 
	       'which is in the ' + currentPosition.region.name + ' region ' + 
	       'of the ' + currentPosition.galaxy.name + ' galaxy.';
};

exports.getPlacesInCurrentSystem = function() {
	return currentPosition.system.places;
};

exports.isWarpDestinationValid = function(destination) {
	var place = _.find(currentPosition.system.places, function(item) { return item.beacon == destination; });
	return place != null;
};

exports.warpTo = function(destination) {
	var place = _.find(currentPosition.system.places, function(item) { return item.beacon == destination; });
	currentPosition.changePlaceTo(place);
	return place;
};

exports.isJumpGatePresent = function() {
	return (currentPosition.place.type == constants.placeType.JUMPGATE);
};

exports.useJumpGate = function() {
	var destination = parsePosition(currentPosition.place.jumpCoordinates);
	currentPosition.changePositionTo(destination);
	return destination;
};