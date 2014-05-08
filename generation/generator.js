var extent = ["Millenium", "Dawn", "Star", "Galaxy", "Nebula", "Horizon", "Infinity", "Cosmos"];
var descriptorNoun = ["Death", "Speed", "Gypsy", "Dawn", "Doom", "Warp", "Danger", "Quicksilver"];
var shipNoun = ["Falcon", "Lion", "Lady", "Bullet", "Runner", "Kestrel", "Gypsy", "Wing", "Racer", "Pheonix", "Comet", "Luck", "Voyager", "Wasp", "Vector", "Dasher", "Sword", "Warden", "Beacon", "Raider"];

function random(list) {
	var i = Math.floor(Math.random() * list.length);
	return list[i];
}

function newRandom(existing, list) {
	var found = true;
	var newWord = "";
	while (found) {
		newWord = random(list);
		
		found = false;
		for (var i = 0; i<existing.length; ++i)
			found |= newWord == existing[i];
	}
	
	return newWord;
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
	var possessive = random(shipNoun);
	return possessive + "'s " + newRandom([possessive], shipNoun);
}

var gypsyDanger = function() {
	var noun = random(descriptorNoun);
	return noun + "-" + newRandom([noun], descriptorNoun);
}

exports.shipName = composite([milleniumFalcon, doomFalcon, falconsLuck, gypsyDanger], [0.55, 0.25, 0.10]);