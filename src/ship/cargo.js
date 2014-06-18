var _ = require('underscore-node');
var constants = require('../constants.js');
var common = require('../common.js');

function getCargoholds(ship) {
    return _.filter(ship.subsystems, function(subsystem) {
        return subsystem.type == constants.subsystemType.CARGOHOLD
            && subsystem.health > 0;
    });
}

function holdHasCapacityFor(hold, item) {
    var currentVolume = getCurrentVolume(hold);
     return hold.cargo.capacity >= currentVolume + item.volume;
}

function getCurrentVolume(hold) {
    var currentVolume = 0;
    _.each(hold.cargo.contents, function(currentItem) { currentVolume += currentItem.volume; });
    return currentVolume;
}

/**
 * Ship has at least one cargohold with sufficient capacity for the item.
 * Purposefully inefficient (does not consider shuffling items).
 */
exports.hasCapacityFor = function(item, ship) {
    var allHolds = getCargoholds(ship);
    var holdWithCapacity =_.find(allHolds, function(hold) { return holdHasCapacityFor(hold, item); });
    return holdWithCapacity != null;
};

/**
 * Add item to the first cargohold with sufficient capacity.
 */
exports.addItem = function(item, ship) {
    var allHolds = getCargoholds(ship);
    var holdWithCapacity =_.find(allHolds, function(hold) { return holdHasCapacityFor(hold, item); });
    if (holdWithCapacity != null) {
        if (item.stackable) {
            var stack = _.find(holdWithCapacity.cargo.contents, function(checkItem) { return checkItem.name == item.name && checkItem.stackable; });
            if (stack != null) {
                stack.volume += item.volume;
            }
        }
        else {
            holdWithCapacity.cargo.contents.push(item);    
        }
    }
};

/**
 * Remove item from the cargohold in which it resides.
 */
exports.removeItem = function(item, ship) {
    var allHolds = getCargoholds(ship);
    var holdWithItem = _.find(allHolds, function(hold) {
        return _.some(hold.cargo.contents, function(currentItem) {
            return currentItem == item;
        })
    });
    if (holdWithItem != null) {
        holdWithItem.cargo.contents.remove(holdWithItem);
    }
};

/**
 * Returns all of a ship's healthy cargoholds
 */
exports.getCargoholds = function(ship) {
    return getCargoholds(ship);
};

/**
 * Creates a capacity bar string, like [========  ]
 */
exports.capacityBar = function(hold) {
    var currentVolume = getCurrentVolume(hold);
    common.out('currentVolume: ' + currentVolume);
	var capacityBar = '';
	var capacity = Math.ceil(currentVolume/hold.cargo.capacity * 10);
	if (capacity > 0) {
		for (var i=0;i<10;i++) {
			if (i < capacity) {
				capacityBar += '=';
			}
			else {
				capacityBar += ' ';
			}
		}
	
	}
	return '[' + capacityBar + ']';
};