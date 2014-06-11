var constants = require('../constants.js');

exports.generateCargoHold = function() {
    var subsystem = {
        type: constants.subsystemType.CARGOHOLD,
        description: 'Standard Cargo',
        health: 500,
        maxHealth: 500,
        properties: [
            {
                cargo: {
                    capacity: 300,
                    contents: []
                }
            }
        ]
    };
    return subsystem;
};

exports.generateMiningLaser = function() {
    var subsystem = {
        type: constants.subsystemType.MINING_LASER,
        description: 'Dalton ML-1300',
        health: 100,
        maxHealth: 100,
        properties: [{miningPower: 12}]
    };
    return subsystem;
};

exports.generateSublightEngine = function() {
    var subsystem = {
        type: constants.subsystemType.SUBLIGHT_ENGINE,
        description: 'Quicksilver Dasher',
        health: 250,
        maxHealth: 250,
        properties: [{thrustPower: 45}]
    };
    return subsystem;
};