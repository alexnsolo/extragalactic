var game =	require('./../game/game.js');
var _ = 	require('underscore-node');
var S = 	require('string');

// this is a little crazy, for now
function parseCurrentLocation(navIds, universe) {
	var galaxy = _.find(universe.galaxies, function(item) { return item.id == navIds.galaxyId; });
	var region = _.find(galaxy.regions, function(item) { return item.id == navIds.regionId; });
	var system = _.find(region.systems, function(item) { return item.id == navIds.systemId; });
	var place = _.find(system.places, function(item) { return item.id == navIds.placeId; });
	return {
		galaxy: galaxy,
		region: region,
		system: system,
		place: place
	};
}

exports.getCurrentLocation = function() {
	var currentLocation = parseCurrentLocation(game.main.player.nav, game.main.universe);
	return currentLocation;
};

exports.getPlacesInCurrentSystem = function() {
	var currentLocation = parseCurrentLocation(game.main.player.nav, game.main.universe);
	return currentLocation.system.places;
};

exports.isWarpDestinationValid = function(destination) {
	var currentLocation = parseCurrentLocation(game.main.player.nav, game.main.universe);
	var place = _.find(currentLocation.system.places, function(item) { return item.beacon == destination; });
	return place != null;
};

exports.warpTo = function(destination) {
	var currentLocation = parseCurrentLocation(game.main.player.nav, game.main.universe);
	var place = _.find(currentLocation.system.places, function(item) { return item.beacon == destination; });
	game.main.player.nav.placeId = place.id;
	return place;
};