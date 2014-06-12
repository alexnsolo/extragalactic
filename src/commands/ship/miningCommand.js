var context = 	    require('./../commandContext.js').main;
var common = 	    require('./../../common.js');
var navigation = 	require('./../../navigation/navigation.js');
var mining = 	    require('./../../ship/mining.js');
var constants =     require('./../../constants.js');
var time =          require('./../../time/time.js');

exports.applies = function(input, game) {
    if (!context.includes('ship')) return false;
    var words = input.split(' ');
    return (words.length == 2
        && (words[0] == 'start' || words[0] == 'stop')
        && words[1] == 'mining');
};

exports.execute = function(input, game) {
    var words = input.split(' ');
    if (words[0] == 'start') {
        if (navigation.getCurrentPlaceType() != constants.placeType.ASTEROID_FIELD) {
            common.out('There is nothing to mine here.');
            return;
        }

        if (!mining.hasMiningCapability(game.main.player.ship)) {
            common.out('Your ship has no subsystems capable of doing that.');
            return;
        }

        var miningJob = mining.createMiningJob(game.main.player.ship);
        time.startJob(miningJob);

        common.out('Your ship\'s mining lasers hum to life and begin to carve into a nearby asteroid.\n' +
                   'This may take a while.');
    }
    else if (words[0] == 'stop') {
        // TODO: cancel the mining job
    }
};