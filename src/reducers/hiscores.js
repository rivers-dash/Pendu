let initialState = {
	fetching: false,
	fetched: false,
	adding: false,
	added: false,
	error: null,
	hiscores: null,
}

const hiscores= (state = { ...initialState }, action) => {
	switch (action.type) {

		case 'FETCH_HISCORES': {
			state = {
				...state,
				fetching: true,
				fetched: false,
				hiscores: null,
			}
			break;
		}

		case 'FETCH_HISCORES_SUCCESS': {
			state = {
				...state,
				fetching: false,
				fetched: true,
				hiscores: action.payload
			}
			break;
		}

		case 'FETCH_HISCORES_ERROR': {
			state = {
				...state,
				fetching: false,
				fetched: false,
				error: action.payload,
			}
			break;
		}

		case 'ADD_HISCORES': {
			state = {
				...state,
				adding: true,
				added: false,
				hiscores: null,
			}
			break;
		}

		case 'ADD_HISCORES_SUCCESS': {
			state = {
				...state,
				adding: false,
				added: true,
				hiscores: action.payload
			}
			break;
		}

		case 'ADD_HISCORES_ERROR': {
			state = {
				...state,
				adding: false,
				added: false,
				error: action.payload,
			}
			break;
		}

		default:
	}
	return state
}

export default hiscores
