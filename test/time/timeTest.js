var common = require('../../src/common.js');
var time = require('./../../src/time/time.js');
var game = require('../../src/game/game.js');

game.startNew();

for (var i = 0; i<10; i++) {
    (function(j) {
        time.addEvent(
            {
                execute: function() {
                    if (Math.random() > 0.75) {
                        var holdOnJustAMinute = {
                            process: function() {
                                common.out(' - Space Event ' + j + ' interrupts');
                            }
                        };
                        time.addInterrupt(holdOnJustAMinute);
                    }
                    else {
                        common.out(' - Space Event ' + j + ' occurs');
                    }
                }
            }, j);
    })(9-i)
}
time.wait(20);