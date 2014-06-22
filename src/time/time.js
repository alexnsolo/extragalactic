var common = require('../common.js');
var game = require('../game/game.js');

/**
 * Time is measured in hours since the crest of 3000 AD
 */
function formatTime(ticks) {
    var ticksLeft = ticks;
    var years = Math.floor(ticksLeft / 365 / 24);
    ticksLeft -= years * 24 * 365;
    var days =  Math.floor(ticksLeft / 24);
    ticksLeft -= days * 24;
    var hours = ticksLeft;
    return "ET: " + hours + "." + days + " of " + (years+3000) + " AN";
}

exports.currentTime = function() {
	return formatTime(game.main.time.ticks);
};

exports.addEvent = function(event, ticksFromNow) {
    var time = game.main.time;
    event.occurs = time.ticks + ticksFromNow;
    time.eventQueue.push(event);
};

exports.removeEvent = function(event) {
    var time = game.main.time;
    time.eventQueue.remove(event);
};

exports.startJob = function(job) {
    var time = game.main.time;
    time.jobs.push(job);
};

exports.stopJob = function(job) {
    var time = game.main.time;
    time.jobs.remove(job);
};

exports.addInterrupt = function(interrupt) {
    var time = game.main.time;
    time.interrupts.push(interrupt);
};

exports.removeInterrupt = function(interrupt) {
    var time = game.main.time;
    time.interrupts.remove(interrupt);
};

exports.wait = function(hours) {
	var time = game.main.time;
	if (hours == null) hours = 24*3; // boredom
    var end = time.ticks + hours;
    var interval = 1;

	while (time.ticks < end) {
        time.ticks += interval;

        // process events
        for (var i = 0; i < time.eventQueue.length; i++) {
            var event = time.eventQueue[i];
            if (event.occurs <= time.ticks) {
                event.execute();
                this.removeEvent(event);
            }
        }

        // process jobs
        for (i = 0; i < time.jobs.length; i++) {
            var job = time.jobs[i];
            job.progress(interval, time.ticks);
        }

        // process interrupts
        if (time.interrupts.length > 0) {
            for (i = 0; i < time.interrupts.length; i++) {
                var interrupt = time.interrupts[i];
                interrupt.process();
                this.removeInterrupt(interrupt);
            }

            break;
        }
	}
};