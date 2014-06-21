var context = 	require('./../commandContext.js').main;
var common =	require('./../../common.js');
var time = 		require('./../../time/time.js');

exports.applies = function(input, game) {
	if (!context.includes('main')) return false;

	var words = input.split(' ');
    return (words.length == 1 && words[0] == 'wait')
        ||
        (words.length == 3
            && words[0] == 'wait'
            && (words[2] == 'hours' || words[2] == 'hour' || words[2] == 'hr' || words[2] == 'hrs'));
};

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
