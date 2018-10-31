let initialState = {
	adding: false,
	added: false,
	expression: null,
	clue: null,
	error: null
}

const addedExpression = (state = { ...initialState }, action) => {
	switch (action.type) {

		case 'ADD_EXPRESSION': {
			state = {
				...state,
				adding: true
			}
			break;
		}

		case 'ADD_EXPRESSION_SUCCESS': {
			state = {
				...state,
				adding: false,
				added: true,
				expression: action.payload.expression,
				clue: action.payload.clue,
				error: null
			}
			break;
		}

		case 'ADD_EXPRESSION_ERROR': {
			state = {
				...state,
				adding: false,
				added: false,
				error: action.payload
			}
				break;
		}

			case 'ADD_EXPRESSION_INIT': {
				state = {
					...initialState
				}
					break;
			}

			default:
	}

		return state
}

export default addedExpression
