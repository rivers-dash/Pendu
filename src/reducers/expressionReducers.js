import Expressions from '../utils/expressions/expressions'

const Expression = Expressions[Math.floor(Math.random() * Math.floor(Expressions.length))]
const initialState = {
	value: Expression.value.toUpperCase(),
	clue: Expression.clue,
}
export const expression = (state = {
	...initialState
}, action) => {
	switch (action.type) {
		case 'FETCH_EXPRESSION':
			const Expression = Expressions[Math.floor(Math.random() * Math.floor(Expressions.length))]
			state = {
				...state,
				value: Expression.value.toUpperCase(),
				clue: Expression.clue,
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
