var shipNameGenerator =		require('../generation/shipNameGenerator.js');
var common = 				require('../common.js');
var constants = 			require('../constants.js');
var _ = 					require('underscore-node');
var fs = 					require('fs');
var eventsModule =			require('events');


var events = new eventsModule.EventEmitter();
exports.events = events;

exports.main = {
	context: 'init'
};

exports.startNew = function() {
	var newGame = {
		player: {
			ship: {
				name: shipNameGenerator.shipName(),
				description: 'A small transport vessel from the age of The Fourth Insurrection. Boasts a spacious cargo hold and light armor.',
				health: 1450,
				maxHealth: 1450,
				subsystems: [
					{
						type: 'mining laser',
						description: 'Dalton ML-1300',
						health: 100,
						maxHealth: 100,
						properties: [{miningPower: 12}]	
					},
					{
						type: 'sublight engine',
						description: 'Quicksilver Dasher',
						health: 250,
						maxHealth: 250,	
						properties: [{thrustPower: 45}]	
					},
					{
						type: 'cargohold',
						description: 'Standard Cargo',
						health: 500,
						maxHealth: 500,
						properties: [{cargoCapacity: 300}]	
					},
				]
			},
			position: {
				galaxyId: 0, 
				regionId: 0,
				systemId: 0,
				placeId: 0
			},
		},
		universe: { 
			id: 0,
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
										}
									]
								}
							]
						}
					]
				}
			]
		},
		time: {
			ticks: Math.floor(Math.random()*2000),
			eventQueue: [],
		},
		context: 'init'
	};

	exports.main = newGame;
	events.emit('game-loaded');
};

exports.save = function(callback) {
	fs.writeFile('saves/saved-game.json', JSON.stringify(exports.main), 'utf8', callback);	
};

exports.load = function() {
	fs.readFile('saves/saved-game.json', 'utf8', function(err, data) {
		if (err) {
			common.out('Could not load game: ' + err.message);
		}
		else {
			exports.main = JSON.parse(data);
			events.emit('game-loaded');
		}
	});
};