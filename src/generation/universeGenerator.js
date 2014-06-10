var constants = require('../constants.js');

exports.generate = function() {
    var universe = {
        name: 'Dauntless',
            galaxies: [
            {
                id: 0,
                name: 'Heart',
                regions: [
                    {
                        id: 0,
                        name: 'Federation',
                        systems: [
                            {
                                id: 0,
                                name: 'Alpha Centauri',
                                places: [
                                    {
                                        id: 0,
                                        name: 'Asteroid field',
                                        type: constants.placeType.ASTEROID_FIELD,
                                        beacon: 'AC-6433',
                                        coordinates: {x: 2045, y: 8572}
                                    },
                                    {
                                        id: 1,
                                        name: 'Rigel Kent Federation Hub',
                                        type: constants.placeType.STATION,
                                        beacon: 'AC-3887',
                                        coordinates: {x: 7775, y: 1249}
                                    },
                                    {
                                        id: 2,
                                        name: 'Rigel Kent',
                                        type: constants.placeType.PLANET,
                                        beacon: 'AC-3926',
                                        coordinates: {x: 7803, y: 2356}
                                    },
                                    {
                                        id: 3,
                                        name: 'Jump Gate to Sirius',
                                        type: constants.placeType.JUMPGATE,
                                        beacon: 'AC-9833',
                                        coordinates: {x: 9012, y: 5373},
                                        jumpCoordinates: {
                                            galaxyId: 0,
                                            regionId: 0,
                                            systemId: 1,
                                            placeId: 1
                                        }
                                    }
                                ]
                            },
                            {
                                id: 1,
                                name: 'Sirius',
                                places: [
                                    {
                                        id: 0,
                                        name: 'Asteroid field',
                                        type: constants.placeType.ASTEROID_FIELD,
                                        beacon: 'SR-1202',
                                        coordinates: {x: 1203, y: 2833}
                                    },
                                    {
                                        id: 1,
                                        name: 'Jump Gate to Alpha Centauri',
                                        type: constants.placeType.JUMPGATE,
                                        beacon: 'SR-9027',
                                        coordinates: {x: 8782, y: 9303},
                                        jumpCoordinates: {
                                            galaxyId: 0,
                                            regionId: 0,
                                            systemId: 0,
                                            placeId: 3
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
    return universe;
}
