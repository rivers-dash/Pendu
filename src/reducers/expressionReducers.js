// Setting up the reducer with action definitions
export const expression = (state = {
	value: 'Meme les americains comprennent'.toUpperCase(),
	clue: '',
}, action) => {
	switch (action.type) {
		case 'FETCH_EXPRESSION':
			state = {
				...state,
				strikes: state.strikes + action.payload,
				hits: state.hits + action.payload
			}
			break;

		case 'MISS':
			state = {
				...state,
				hits: state.hits + action.payload
			}
			break;

		default:
	}
	return state
}
