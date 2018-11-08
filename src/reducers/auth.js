let initialState = {
	logged: false,
	loging: false,
	logingOut: false,
	signingin: false,
	editing: false,
	token: null,
	user: null,
	error: null,

}

const auth = (state = { ...initialState }, action) => {
	switch (action.type) {
// -- LOGIN -------------------------------------------------------------------
		case 'LOGIN': {
			state = {
				...state,
				loging: true,
				logged: false,
			}
			break;
		}

		case 'LOGIN_SUCCESS': {
			state = {
				...state,
				loging: false,
				logged: true,
				token: action.payload.data.token,
				user: action.payload.data.user,
			}
			break;
		}

		case 'LOGIN_ERROR':
		case 'FETCH_EXPRESSION_ERROR':
		case 'FETCH_HISCORES_ERROR':
			state = {
				...state,
				loging: false,
				logged: false,
				token: null,
				user: null,
				error: action.payload,
			}
			break;


		case 'LOGIN_INIT': {
			state = {
				...state,
				error: null
			}
			break;
		}
// -- LOGOUT -------------------------------------------------------------------
		case 'LOGOUT': {
			state = {
				...state,
				logingOut: true,
			}
			break;
		}

		case 'LOGOUT_SUCCESS': {
			state = {
				...state,
				logged: false,
				logingOut: false,
				token: null,
				user: null,
			}
			document.cookie = 'login=; Max-Age=0'
			break;
		}

		case 'LOGOUT_ERROR': {
			state = {
				...state,
				logingOut: false,
				error: action.payload,
			}
			break;
		}
// -- SIGNIN -----------------------------------------------------------------
		case 'SIGNIN': {
			state = {
				...state,
				signingin: true,
			}
			break;
		}

		case 'SIGNIN_SUCCESS': {
			state = {
				...state,
				signingin: false,
				user: action.payload,
			}
			break;
		}

		case 'SIGNIN_ERROR': {
			state = {
				...state,
				signingin: false,
				error: action.payload,
			}
			break;
		}

		case 'SIGNIN_INIT': {
			state = {
				...state,
				error: null,
			}
			break;
		}
// -- EDIT_PROFILE ------------------------------------------------------------
		case 'EDIT_PROFILE': {
			state = {
				...state,
				editing: true,
			}
			break;
		}

		case 'EDIT_PROFILE_SUCCESS': {
			state = {
				...state,
				editing: false,
				token: action.payload.data.token,
				user: action.payload.data.user,
			}
			break;
		}

		case 'EDIT_PROFILE_ERROR': {
			state = {
				...state,
				editing: false,
				error: action.payload,
			}
			break;
		}

		case 'EDIT_PROFILE_INIT': {
			state = {
				...state,
				error: null
			}
			break;
		}

		default:
	}

	return state
}

export default auth
