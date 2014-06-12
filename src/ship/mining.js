var constants = require('../constants.js');
var _ = 		require('underscore-node');

exports.hasMiningCapability = function(ship) {
    return _.some(ship.subsystems, function(subsystem) {
        return subsystem.type == constants.subsystemType.MINING_LASER
            && subsystem.health > 0;
    });
};

exports.createMiningJob = function (ship) {
    return {
        type: constants.jobType.MINING,
        ownerId: ship.id,
        placeId: ship.position.placeId,
        progress: function(ticks) {
            // TODO: do some mining
        }
    };
};
