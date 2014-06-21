var game =      require('./../src/game/game.js');
var mining = 	require('./../src/ship/mining.js');
var time =      require('./../src/time/time.js');
var cargo =     require('./../src/ship/cargo.js');
var common =    require('./../src/common.js');
var _ =         require('underscore-node');
var cargoCommand = require('./../src/commands/ship/cargoCommand.js');

game.startNew();

var playerShip = game.main.player.ship;
var miningJob = mining.createMiningJob(playerShip);
playerShip.jobs.push(miningJob);
time.startJob(miningJob);
time.wait(2);

cargoCommand.execute(null, game);