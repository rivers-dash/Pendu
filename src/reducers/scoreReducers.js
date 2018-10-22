const initialState = {
	strikes: 0,
	hits: 0,
	strikePoints: 10,
	hitPoints: 2
}

export const score = (state = {
	...initialState
}, action) => {
	switch (action.type) {
		case 'STRIKE':
			state = {
				...state,
				strikes: state.strikes + state.strikePoints,
				hits: state.hits + state.hitPoints
			}
			break;

		case 'MISS':
			state = {
				...state,
				hits: state.hits + state.hitPoints
			}
			break;

		case 'CLUE':
			state = {
				...state,
				strikePoints: state.strikePoints/2,
				hitPoints: state.hitPoints*2
			}
			break;

		default:
	}
	return state
}
