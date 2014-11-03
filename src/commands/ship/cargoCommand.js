var common = require('./../../common.js');
var cargo = require('../../ship/cargo');
var _ = require('underscore-node');
var game =			require('./../../game/game.js');

exports.execute = function(input) {
    var holds = cargo.getCargoholds(game.main.player.ship);
    var items = [];
    _.each(holds, function(hold) {
        items = items.concat(hold.cargo.contents);    
    });
    
    common.out('Your ship\'s cargoholds:');
    _.each(holds, function(hold) {
        common.out('  ' + hold.description + ' (' + hold.cargo.capacity + 'm3) ' + cargo.capacityBar(hold) + '\n');    
    });

    if (items.length > 0) {
        common.out('Their contents:');
        _.each(items, function(item) {
            common.out('  ' + item.name + ' (' + item.volume + 'm3)');
        });
    }
};