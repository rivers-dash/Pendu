// Setting up the reducer with action definitions
export const score = (state = {
	strikes: 0,
	hits: 0,
}, action) => {
	switch (action.type) {
		case 'STRIKE':
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
