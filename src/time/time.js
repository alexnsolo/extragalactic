var common = require('../common.js');
exports.time = {
	_ticks: Math.floor(Math.random()*2000),

	_eventQueue: [],
	
	currentTime: function() {
		return this.formatTime(this._ticks);
	},
	
	formatTime: function(ticks) {
		var minutes = ticks * 15;
		var thousands = Math.floor(minutes / 1000);
		var remainder = minutes % 1000;
		return thousands + ":" + remainder + " After Aegon's Landing";
	},

	addEvent: function(event, ticksFromNow) {
		var occurs = this._ticks + ticksFromNow;
		var node = {event: event, occurs: occurs};
		
		if (this._eventQueue.length == 0) {
			this._eventQueue.push(node);
		} else {
			var i = 0;
			while (i<this._eventQueue.length && this._eventQueue[i].occurs < occurs)
				++i;
			
			this._eventQueue.splice(i, 0, node);
		}
	},
	
	waitHours: function(hours) {
		var waitTicks = hours*4;

		while (waitTicks > 0) {
			if (this._eventQueue.length == 0) {
				// No events waiting, simply pass the time
				this._ticks += waitTicks;
				break;
			}
			
			// Check if the next event happens during the wait
			var node = this._eventQueue[0];
			var timeToEvent = node.occurs - this._ticks;
			if (timeToEvent <= waitTicks) {
				this._eventQueue.shift();
				this._ticks += timeToEvent;
				node.event.execute();
				waitTicks -= timeToEvent;
			} else {
				// The event is still in the future, simply advance time
				this._ticks += waitTicks
				break;
			}
		}
	}
}