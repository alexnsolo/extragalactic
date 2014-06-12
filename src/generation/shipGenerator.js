var shipNameGenerator =	    require('./shipNameGenerator.js');
var subsystemGenerator =	require('./subsystemGenerator.js');
var game =                  require('./../game/game.js');

function generateNextId() {
    return ++game.main.identifiers.nextShipId;
}

exports.generatePlayerStartingShip = function() {
    var ship = {
        id: generateNextId(),
        name: shipNameGenerator.generateShipName(),
        description: 'A small transport vessel from the age of The Fourth Insurrection. Boasts a spacious cargo hold and light armor.',
        health: 1450,
        maxHealth: 1450,
        subsystems: [
            subsystemGenerator.generateCargoHold(),
            subsystemGenerator.generateSublightEngine(),
            subsystemGenerator.generateMiningLaser()
        ],
        position: {
            galaxyId: 0,
            regionId: 0,
            systemId: 0,
            placeId: 0
        }
    };
    return ship;
};
