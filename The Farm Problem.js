// You've got chickens (2 legs), cows (4 legs) and pigs (4 legs) on your farm. Return the total number of legs on your farm.

// (animals(5, 2, 8), 50)
// (animals(3, 4, 7), 50)
// (animals(1, 2, 3), 22)
// (animals(3, 5, 2), 34)

const animals=(chickens, cows, pigs) => {
	let chickenLegs = 2 * chickens;
	let cowLegs = 4 * cows;
	let pigLegs = 4 * pigs;
	
	return chickenLegs+cowLegs+pigLegs;
}