var game = 		require('./../game/game.js');
var common = 	require('../common.js');

exports.describePlayerWealth = function() {
    return 'You have ' + game.main.player.wealth.money + ' Federation Credits.';
};
