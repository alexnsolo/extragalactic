var universeGenerator =     require('../generation/universeGenerator.js');
var shipGenerator =		    require('../generation/shipGenerator.js');
var common = 				require('../common.js');
var _ = 					require('underscore-node');
var fs = 					require('fs');
var eventsModule =			require('events');
var icebox =                require('icebox');


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
			ticks: 622324,
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

    newGame.universe = universeGenerator.generate();
    newGame.player.ship = shipGenerator.generatePlayerStartingShip();

	events.emit('game-loaded');
};

exports.save = function(callback) {
    var frozenData = icebox.freeze(exports.main);
    fs.writeFile('saves/saved-game.json', JSON.stringify(frozenData), 'utf8', callback);
};

exports.load = function() {
	fs.readFile('saves/saved-game.json', 'utf8', function(err, data) {
		if (err) {
			common.out('Could not load game: ' + err.message);
		}
		else {
            var frozenData = JSON.parse(data);
            exports.main = icebox.thaw(frozenData);
			events.emit('game-loaded');
		}
	});
};