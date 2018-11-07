let initialState = {
	logged: false,
	loging: false,
	logingOut: false,
	signingin: false,
	token: null,
	user: null,
	error: null,

}

const auth = (state = { ...initialState }, action) => {
	switch (action.type) {

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

		case 'LOGIN_ERROR': {
			state = {
				...state,
				loging: false,
				logged: false,
				token: null,
				user: null,
				error: action.payload,
			}
			break;
		}

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
			document.cookie = 'login=; Max-Age=0'
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
				...initialState
			}
			break;
		}

		default:
	}

	return state
}

export default auth
