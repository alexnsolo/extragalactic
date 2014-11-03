var common =	require('./../../common.js');
var time = 		require('./../../time/time.js');

exports.execute = function(input, game) {
    var words = input.split(' ');
    if (words.length == 1) {
        time.wait();
    }
    else {
        var hours = words[1];
        time.wait(hours);
    }
	common.out(time.currentTime());
};
