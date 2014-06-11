var shipNameGenerator =	    require('./shipNameGenerator.js');
var subsystemGenerator =	require('./subsystemGenerator.js');

exports.generatePlayerStartingShip = function() {
    var ship = {
        name: shipNameGenerator.generateShipName(),
        description: 'A small transport vessel from the age of The Fourth Insurrection. Boasts a spacious cargo hold and light armor.',
        health: 1450,
        maxHealth: 1450,
        subsystems: [
            subsystemGenerator.generateCargoHold(),
            subsystemGenerator.generateSublightEngine(),
            subsystemGenerator.generateMiningLaser()
        ]
    };
    return ship;
};
