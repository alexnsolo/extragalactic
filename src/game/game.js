var shipNameGenerator = require('../generation/shipNameGenerator.js');
var common = require('../common.js');
var _ = require('underscore-node');
var fs = require('fs');

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
			}
		},
		time: {
			ticks: Math.floor(Math.random()*2000),
			eventQueue: [],
		},
		context: 'init'
	};

	exports.main = newGame;
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
		}
	});
};