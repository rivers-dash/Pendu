const initialState = {
	strikeScore: 0,
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
				strikeScore: state.strikeScore + state.strikePoints - state.hitPoints,
			}
			break;

		case 'MISS':
			state = {
				...state,
				strikeScore: state.strikeScore - state.hitPoints,
			}
			break;

		case 'CLUE':
			state = {
				...state,
				strikePoints: state.strikePoints/2,
				hitPoints: state.hitPoints*2
			}
			break;

			case 'WIN':
				state = {
					...state,
					strikeScore: state.strikeScore - state.hitScore,
				}
				break;

			case 'RESET_GAME':
				state = {
					...initialState
				}
				break;

		default:
	}
	return state
}
