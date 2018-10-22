let strikePoints = 10
let hitPoints = 2


export const score = (state = {
	strikes: 0,
	hits: 0,
}, action) => {
	switch (action.type) {
		case 'STRIKE':
			state = {
				...state,
				strikes: state.strikes + strikePoints,
				hits: state.hits + hitPoints
			}
			break;

		case 'MISS':
			state = {
				...state,
				hits: state.hits + hitPoints
			}
			break;

		case 'CLUE':
			strikePoints = strikePoints/2
			hitPoints = hitPoints*2
			break;

		default:
	}
	return state
}
