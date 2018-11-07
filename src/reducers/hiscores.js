let initialState = {
	fetching: false,
	fetched: false,
	hiscores: null,
}

const hiscores= (state = { ...initialState }, action) => {
	switch (action.type) {

		case 'GET_HISCORES': {
			state = {
				...state,
				fetching: true,
				fetched: false,
				hiscores: null,
			}
			break;
		}

		case 'GET_HISCORES_SUCCESS': {
			state = {
				...state,
				fetching: false,
				fetched: true,
				hiscores: action.payload
			}
			break;
		}

		case 'GET_HISCORES_ERROR': {
			state = {
				...state,
				fetching: false,
				fetched: false,
				error: action.payload,
			}
			break;
		}

		default:
	}
	return state
}

export default hiscores
