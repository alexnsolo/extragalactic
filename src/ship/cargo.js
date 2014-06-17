var _ = require('underscore-node');
var constants = require('../constants.js');

function getCargoholds(ship) {
    return _.filter(ship.subsystems, function(subsystem) {
        return subsystem.type == constants.subsystemType.CARGOHOLD
            && subsystem.health > 0;
    });
}

function holdHasCapacityFor(hold, item) {
    var currentVolume = 0;
    _.each(hold.cargo.contents, function(currentItem) { currentVolume += currentItem.volume; });
     return hold.cargo.capacity >= currentVolume + item.volume;
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
        holdWithCapacity.cargo.contents.push(item);
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
