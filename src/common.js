var colors = require('colors');

exports.out = function(message) {
	console.log(message);
};

exports.healthBar = function(thing) {
	var healthBar = '';
	var health = Math.ceil(thing.health/thing.maxHealth * 10);
	if (health > 0) {
		for (var i=0;i<10;i++) {
			if (i < health) {
				healthBar += '=';
			}
			else {
				healthBar += ' ';
			}
		}
		if (health < 4) {
			healthBar = healthBar.red;
		}
		else if (health < 7) {
			healthBar = healthBar.yellow;
		}
		else {
			healthBar = healthBar.green;
		}
	}
	else {
		healthBar = ' disabled '.red;
	}
	return '[' + healthBar + ']';
};

