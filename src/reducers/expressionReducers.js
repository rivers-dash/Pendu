import Expressions from '../utils/expressions/expressions'

const Expression = Expressions[Math.floor(Math.random() * Math.floor(Expressions.length))]

export const expression = (state = {
	value: Expression.value.toUpperCase(),
	clue: Expression.clue,
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
