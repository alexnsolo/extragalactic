var _ = require('underscore-node');
var constants = require('../constants.js');

function getCargoholds(ship) {
    return _.where(ship.subsystems, {type: constants.subsystemType.CARGOHOLD});
}

function holdHasCapacityFor(hold, item) {
    var currentVolume = 0;
    _.each(hold.contents, function(currentItem) { currentVolume += currentItem.volume; });
     return hold.capacity >= currentVolume + item.volume;
}

/**
 * Ship has at least one cargohold with sufficient capacity for the item.
 * Purposefully inefficient (does not consider shuffling items).
 */
exports.hasCapacityFor = function(item, ship) {
    var allHolds = getCargoholds(ship);
    var holdWithCapacity =_.find(allHolds, function(hold) { return holdHasCapacityFor(item, hold); });
    return holdWithCapacity != null;
};

/**
 * Add item to the first cargohold with sufficient capacity.
 */
exports.addItem = function(item, ship) {
    var allHolds = getCargoholds(ship);
    var holdWithCapacity =_.find(allHolds, function(hold) { return holdHasCapacityFor(item, hold); });
    if (holdWithCapacity != null) {
        holdWithCapacity.contents.push(item);
    }
};

/**
 * Remove item from the cargohold in which it resides.
 */
exports.removeItem = function(item, ship) {
    var allHolds = getCargoholds(ship);
    var holdWithItem = _.find(allHolds, function(hold) {
        return _.some(hold.contents, function(currentItem) {
            return currentItem == item;
        })
    });
    if (holdWithItem != null) {
        holdWithItem.contents.remove(holdWithItem);
    }
};
