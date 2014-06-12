var universeGenerator =     require('../generation/universeGenerator.js');
var shipGenerator =		    require('../generation/shipGenerator.js');
var common = 				require('../common.js');
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
			ship: {},
            wealth: {
                money: Math.round((Math.random() * 3456) + 209)
            }
		},
		universe: {},
		time: {
			ticks: Math.floor(Math.random()*2000),
			eventQueue: [],
            jobs: [],
            interrupts: []
		},
        identifiers: {
            nextShipId: 0
        },
		context: 'init'
	};
    exports.main = newGame;

    newGame.player.ship = shipGenerator.generatePlayerStartingShip();
    newGame.universe = universeGenerator.generate();

	events.emit('game-loaded');
};

exports.save = function(callback) {
	fs.writeFile('../saves/saved-game.json', JSON.stringify(exports.main), 'utf8', callback);
};

exports.load = function() {
	fs.readFile('../saves/saved-game.json', 'utf8', function(err, data) {
		if (err) {
			common.out('Could not load game: ' + err.message);
		}
		else {
			exports.main = JSON.parse(data);
			events.emit('game-loaded');
		}
	});
};