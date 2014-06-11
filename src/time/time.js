var common = require('../common.js');
var game = require('../game/game.js');


function formatTime(ticks) {
    var minutes = ticks * 15;
    var thousands = Math.floor(minutes / 1000);
    var remainder = minutes % 1000;
    return thousands + ":" + remainder + " After Aegon's Landing";
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
    var index = time.eventQueue.indexOf(event);
    if (index >= 0) {
        time.eventQueue.splice(index, 1);
    }
};

exports.startJob = function(job) {
    var time = game.main.time;
    time.jobs.push(job);
};

exports.cancelJob = function(job) {
    var time = game.main.time;
    var index = time.jobs.indexOf(job);
    if (index > 0) {
        time.jobs.splice(index, 1);
    }
};

exports.waitHours = function(hours) {
	var time = game.main.time;
	var end = time.ticks + hours*4;
    var interval = 1;

	while (time.ticks < end) {
        time.ticks += interval;

        // process events
        for (var i = 0; i < time.eventQueue.length; i++) {
            if (time.interrupts.length > 0) break;

            var event = time.eventQueue[i];
            if (event.occurs <= time.ticks) {
                event.execute();
                this.removeEvent(event);
            }
        }

        // process jobs
        for (i = 0; i < time.jobs.length; i++) {
            if (time.interrupts.length > 0) break;

            var job = time.jobs[i];
            job.progress(interval);
        }

        // process interrupts
        for (i = 0; i < time.interrupts.length; i++) {
            var interrupt = time.interrupts[i];
            interrupt.process();
        }
	}
};