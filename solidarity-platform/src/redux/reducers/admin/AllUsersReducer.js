import {
	FETCH_ALL_USERS_REQUEST,
	FETCH_ALL_USERS_SUCCESS,
	FETCH_ALL_USERS_FAILURE,
} from "../../types/admin/AllUsersTypes";

const initialState = {
	loading: false,
	allUsersList: [],
	error: "",
};

const allUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_ALL_USERS_SUCCESS:
			return {
				loading: false,
				allUsersList: action.payload,
				error: "",
			};
		case FETCH_ALL_USERS_FAILURE:
			return {
				loading: false,
				allUsersList: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default allUsersReducer;
