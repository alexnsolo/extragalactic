var common = require('./../common.js');

exports.applies = function(input, game) {
	return (input == 'begin');
};

exports.execute = function(input, game) {

	// Initialize some random space events
	for (var i = 0; i<100; ++i) {
		var time = Math.floor(Math.random() * 150);
		(function(time) {
			var event = 
			{
				execute: function() {
					common.out("Some random space event has occured at " + game.time.currentTime())
				}
			};
			game.time.addEvent(event, time);
		})(time);
	}	
	
	common.out('Hello space.');
};