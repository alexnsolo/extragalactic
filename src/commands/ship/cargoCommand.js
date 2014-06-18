var context = require('./../commandContext.js').main;
var common = require('./../../common.js');
var cargo = require('../../ship/cargo');
var _ = require('underscore-node');

exports.applies = function(input, game) {
    if (!context.includes('ship')) return false;
	return (input == 'cargo');
};

exports.execute = function(input, game) {
    var holds = cargo.getCargoholds(game.main.player.ship);
    var items = [];
    _.each(holds, function(hold) {
        items = items.concat(hold.cargo.contents);    
    });
    
    common.out('Your ship\'s cargoholds:\n');
    _.each(holds, function(hold) {
        common.out('  ' + hold.description + ' (' + hold.cargo.capacity + 'm3) ' + cargo.capacityBar(hold) + '\n');    
    });
    
    common.out('\nTheir contents:\n');
    _.each(items, function(item) {
        common.out('  ' + item.name + ' (' + item.volume + 'm3)');    
    });
};