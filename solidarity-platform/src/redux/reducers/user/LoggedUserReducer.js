import {
	FETCH_LOGIN_REQUEST,
	FETCH_LOGIN_SUCCESS,
	FETCH_LOGIN_FAILURE,
} from "../../types/user/LoginTypes";
import {
	FETCH_LOGGED_USER_DATA_REQUEST,
	FETCH_LOGGED_USER_DATA_SUCCESS,
	FETCH_LOGGED_USER_DATA_FAILURE,
} from "../../types/user/LoggedUserTypes";

const initialState = {
	loading: false,
	isLoggedIn: undefined,
	loggedUserData:[],
	error: "",
};

const loggedUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_LOGIN_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				isLoggedIn: action.payload,
				error: "",
			};
		case FETCH_LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				isLoggedIn: false,
				error: action.payload,
			};
		case FETCH_LOGGED_USER_DATA_REQUEST:
			return {
				...state,
				loading: false,				
				error: action.payload,
			};
		case FETCH_LOGGED_USER_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				loggedUserData:action.payload,
				error: action.payload,
			};
		case FETCH_LOGGED_USER_DATA_FAILURE:
			return {
				...state,
				loading: false,
				loggedUserData:[],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default loggedUserReducer;
