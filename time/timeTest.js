var common = require('../common.js');
var time = require('./time.js').time;

for (var i = 0; i<10; ++i) {
	(function(j) {
		time.addEvent(
				{
					execute: function() {
						common.out(' - Space Event ' + j + ' occurs');
					}
				}, j);
	})(9-i);
}
time.waitHours(1);
time.waitHours(1);
time.waitHours(1);
time.waitHours(1);
time.waitHours(1000);