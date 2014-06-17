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
            galaxy: game.main.universe.galaxies[0],
            region: game.main.universe.galaxies[0].regions[0],
            system: game.main.universe.galaxies[0].regions[0].systems[0],
            place:  game.main.universe.galaxies[0].regions[0].systems[0].places[0]
        },
        jobs: []
    };
    return ship;
};
