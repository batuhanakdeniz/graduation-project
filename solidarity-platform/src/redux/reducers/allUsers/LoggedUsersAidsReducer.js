import {
	FETCH_LOGGED_USERS_PENDING_AIDS_REQUEST,
	FETCH_LOGGED_USERS_PENDING_AIDS_SUCCESS,
	FETCH_LOGGED_USERS_PENDING_AIDS_FAILURE,
	FETCH_LOGGED_USERS_ACTIVE_AIDS_REQUEST,
	FETCH_LOGGED_USERS_ACTIVE_AIDS_SUCCESS,
	FETCH_LOGGED_USERS_ACTIVE_AIDS_FAILURE,
} from "../../types/allUsers/LoggedUsersAidsTypes";

const initialState = {
	loading: false,
	pendingAidsList: [],
	activeAidsList: [],
	error: "",
};

const loggedUsersAidsAidsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_LOGGED_USERS_PENDING_AIDS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_LOGGED_USERS_PENDING_AIDS_SUCCESS:
			return {
				loading: false,
				pendingAidsList: action.payload,
				activeAidsList: [],
				error: "",
			};
		case FETCH_LOGGED_USERS_PENDING_AIDS_FAILURE:
			return {
				loading: false,
				pendingAidsList: [],
				activeAidsList: [],
				error: action.payload,
			};
		case FETCH_LOGGED_USERS_ACTIVE_AIDS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_LOGGED_USERS_ACTIVE_AIDS_SUCCESS:
			return {
				loading: false,
				pendingAidsList: [],
				activeAidsList: action.payload,
				error: "",
			};
		case FETCH_LOGGED_USERS_ACTIVE_AIDS_FAILURE:
			return {
				loading: false,
				pendingAidsList: [],
				activeAidsList: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default loggedUsersAidsAidsReducer;
