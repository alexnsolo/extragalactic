var extent = ["Millenium", "Dawn", "Star", "Galaxy", "Nebula", "Horizon", "Infinity"];
var descriptorNoun = ["Death", "Speed", "Gypsy", "Dawn", "Doom", "Warp", "Danger", "Quicksilver"];
var shipNoun = ["Falcon", "Lion", "Lady", "Bullet", "Runner", "Kestrel", "Gypsy", "Wing", "Racer", "Pheonix", "Comet", "Luck", "Voyager", "Wasp", "Vector", "Dasher"];

function random(list) {
	var i = Math.floor(Math.random() * list.length);
	return list[i];
}

function newRandom(existing, list) {
	
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

var milleniumFalcon = function() {
	return random(extent) + " " + random(shipNoun);
}

var doomFalcon = function() {
	return random(descriptorNoun) + " " + random(shipNoun);
}

var falconsLuck = function() {
	return random(shipNoun) + "'s " + random(shipNoun);
}

var gypsyDanger = function() {
	return random(descriptorNoun) + "-" + random(descriptorNoun);
}

var lionsWing = function() {
	return random(shipNoun) + "'s " + random(shipNoun);
}

exports.shipName = composite([milleniumFalcon, doomFalcon, falconsLuck, gypsyDanger, lionsWing], [0.55, 0.10, 0.10, 0.5]);