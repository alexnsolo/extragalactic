var context = 	    require('./../commandContext.js').main;
var common = 	    require('./../../common.js');
var navigation = 	require('./../../navigation/navigation.js');
var mining = 	    require('./../../ship/mining.js');
var constants =     require('./../../constants.js');
var time =          require('./../../time/time.js');
var _ =             require('underscore-node');
var game =			require('./../../game/game.js');

exports.execute = function(input) {
    var playerShip = game.main.player.ship;
    var words = input.split(' ');
    if (words[0] == 'start') {
        if (navigation.getCurrentPlace().type != constants.placeType.ASTEROID_FIELD) {
            common.out('There is nothing to mine here.');
            return;
        }

        if (!mining.hasMiningCapability(playerShip)) {
            common.out('Your ship has no subsystems capable of doing that.');
            return;
        }

        var miningJob = mining.createMiningJob(playerShip);
        playerShip.jobs.push(miningJob);
        time.startJob(miningJob);

        common.out('Your ship\'s mining lasers hum to life and begin to carve into a nearby asteroid. This may take a while.');
    }
    else if (words[0] == 'stop') {
        var miningJobs = _.filter(playerShip.jobs, function(job) {return job.type == constants.jobType.MINING});
        _.each(miningJobs, function(job) {
            playerShip.jobs.remove(job);
            time.stopJob(job);
        });

        common.out('Your ship\'s mining lasers power down, pulling the last bits of ore into your cargohold.');
    }
};