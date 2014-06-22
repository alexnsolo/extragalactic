var game = 		require('./../game/game.js');
var constants = require('../constants.js');
var common =    require('../common.js');
var _ = 		require('underscore-node');
var time =      require('./../time/time.js');

function calculateArrivalTime(ship, destination) {
    // TODO: make this real
    return game.main.time.ticks + 10;
}

function createWarpJob(ship, destination) {
    return {
        type: constants.jobType.WARP,
        owner: ship,
        destination: destination,
        arrivalTime: calculateArrivalTime(ship, destination),
        progress: function(ticks) {
            if (game.main.time.ticks >= this.arrivalTime) {
                ship.position.place = destination;
                var interrupt = {
                    process: function() {
                        common.out('You are now at "' + destination.name + '" (nav beacon ' + destination.beacon + ').\n');
                    }
                };
                ship.jobs.remove(this);
                time.stopJob(this);
                time.addInterrupt(interrupt)
            }
        }
    };
}

exports.describeCurrentPosition = function() {
    var playerPosition = game.main.player.ship.position;
    var placeDescription;
    if (playerPosition.place.type == constants.placeType.WARPSPACE) {
        placeDescription = 'You are in warpspace';
    }
    else {
        placeDescription = 'You are at "' + playerPosition.place.name + '" (nav beacon ' + playerPosition.place.beacon + ')';
    }
    return placeDescription + ', ' +
        'in the ' + playerPosition.system.name + ' system, ' +
        'which is in the ' + playerPosition.region.name + ' region ' +
        'of the ' + playerPosition.galaxy.name + ' galaxy.';
};

exports.getPlacesInCurrentSystem = function() {
    return _.filter(game.main.player.ship.position.system.places, function(place) { return place.type != constants.placeType.WARPSPACE; });
};

exports.getCurrentPlace = function() {
    return game.main.player.ship.position.place;
};

exports.translateBeacon = function(beacon, ship) {
    return _.findWhere(ship.position.system.places, {beacon: beacon});
};

exports.canWarp = function(ship) {
    // check: ship is not already in warpspace
    return ship.position.place.type != constants.placeType.WARPSPACE;
};

exports.warpTo = function(beacon, ship) {
    var destination = _.findWhere(ship.position.system.places, {beacon: beacon});
    var warpJob = createWarpJob(ship, destination);
    ship.jobs.push(warpJob);
    time.startJob(warpJob);

    ship.position.place = _.findWhere(ship.position.system.places, {type: constants.placeType.WARPSPACE});
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