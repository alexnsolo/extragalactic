var common = require('../common.js');
var game = require('../game/game.js');


exports.currentTime = function() {
	return this.formatTime(game.main.time.ticks);
};
	
exports.formatTime = function(ticks) {
	var minutes = ticks * 15;
	var thousands = Math.floor(minutes / 1000);
	var remainder = minutes % 1000;
	return thousands + ":" + remainder + " After Aegon's Landing";
};

exports.addEvent =function(event, ticksFromNow) {
	var time = game.main.time;
	var occurs = time.ticks + ticksFromNow;
	var node = {event: event, occurs: occurs};
	
	if (time.eventQueue.length == 0) {
		time.eventQueue.push(node);
	} else {
		var i = 0;
		while (i<time.eventQueue.length && time.eventQueue[i].occurs < occurs)
			++i;
		
		time.eventQueue.splice(i, 0, node);
	}
};

exports.waitHours =function(hours) {
	var time = game.main.time;
	var waitTicks = hours*4;

	while (waitTicks > 0) {
		if (time.eventQueue.length == 0) {
			// No events waiting, simply pass the time
			time.ticks += waitTicks;
			break;
		}
		
		// Check if the next event happens during the wait
		var node = time.eventQueue[0];
		var timeToEvent = node.occurs - time.ticks;
		if (timeToEvent <= waitTicks) {
			time.eventQueue.shift();
			time.ticks += timeToEvent;
			node.event.execute();
			waitTicks -= timeToEvent;
		} else {
			// The event is still in the future, simply advance time
			time.ticks += waitTicks
			break;
		}
	}
};