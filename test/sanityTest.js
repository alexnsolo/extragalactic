var game =      require('./../src/game/game.js');
var mining = 	require('./../src/ship/mining.js');
var time =      require('./../src/time/time.js');

game.startNew();

var playerShip = game.main.player.ship;
var miningJob = mining.createMiningJob(playerShip);
playerShip.jobs.push(miningJob);
time.startJob(miningJob);
time.waitHours(2);
