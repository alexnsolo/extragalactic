var SPACE_NOUNS = ['Comet', 'Dawn', 'Galaxy', 'Horizon', 'Nebula', 'Nova', 'Star', 'Sun'];
var ABSTRACT_NOUNS = ['Blessing', 'Danger', 'Dawn', 'Death', 'Destiny', 'Doom',  'Hope', 'Light', 'Luck'];
var ASPECTS = ['Endurance', 'Speed', 'Strength', 'Guile', 'Wisdom'];

var ANIMALS = ['Dragon', 'Falcon', 'Fox', 'Griffen', 'Lion', 'Pheonix'];
var OTHER_NOUNS = ['Lady', 'Bullet', 'Runner', 'Ranger', 'Gypsy', 'Wing', 'Racer', 'Voyager', 'Wasp', 'Vector', 'Dasher', 'Sword', 'Warden', 'Beacon', 'Raider'];

function random(list) {
	return function() {
		var i = Math.floor(Math.random() * list.length);
		return list[i];
	}
}

function grammar(funs) {
	return function() {
		var str = '';
		for (var i = 0; i<funs.length-1; ++i)
			str += funs[i]() + ' ';;
		str += funs[funs.length-1]();
		return str;
	}
}

function possessive(list) {
	var f = random(list);
	return function() {
		var string = f();
		if (string.charAt(string.length-1) == 's')
			return string + '\'';
		return string + '\'s';
	}
}

function composite(funs, probs) {
	return function() {
		var n = Math.random();
		var probMax = 0;
		for (var i = 0; i<probs.length; ++i) {
			probMax += probs[i];
			if (n < probMax)
				return funs[i]();
		}
		return funs[funs.length - 1]();
	}
}
var milleniumFalcon = grammar([random(SPACE_NOUNS), random(ANIMALS)]);
var doomFalcon = grammar([random(ABSTRACT_NOUNS), random(ANIMALS)]);
var cometsBlessing = grammar([possessive(SPACE_NOUNS), random(ABSTRACT_NOUNS)]);
var falconsGuile = grammar([possessive(ANIMALS), random(ASPECTS)]);

exports.generateShipName = composite([milleniumFalcon, doomFalcon, cometsBlessing, falconsGuile], [0.55, 0.25, 0.10]);