var game = 		require('./../game/game.js');
var _ = 		require('underscore-node');
var S = 		require('string');

function PlayerPosition() {
	this.galaxy = null;
	this.region = null;
	this.system = null;
	this.place = null;

	this.parseGameData = function() {
		var gamePosition = game.main.player.position;
		var universe = game.main.universe;
		this.galaxy = _.find(universe.galaxies, 	function(item) { return item.id == gamePosition.galaxyId; });
		this.region = _.find(this.galaxy.regions, 	function(item) { return item.id == gamePosition.regionId; });
		this.system = _.find(this.region.systems, 	function(item) { return item.id == gamePosition.systemId; });
		this.place 	= _.find(this.system.places, 	function(item) { return item.id == gamePosition.placeId; });
	};

	this.changePlaceTo = function(place){
		this.place = place;
		game.main.player.position.placeId = place.id;
	};
};

var currentPosition = new PlayerPosition();

game.events.on('game-loaded', function() {
	currentPosition.parseGameData();
});


exports.describeCurrentPosition = function() {
	return 'You are at ' + currentPosition.place.name + ' (nav beacon ' + currentPosition.place.beacon + '), ' +
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