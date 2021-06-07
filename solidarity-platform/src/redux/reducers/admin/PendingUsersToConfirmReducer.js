import {
	FETCH_PENDING_USERS_REQUEST,
	FETCH_PENDING_USERS_SUCCESS,
	FETCH_PENDING_USERS_FAILURE,
} from "../../types/admin/PendingUsersToConfirmTypes";

const initialState = {
	loading: false,
	pendingUsersList: [],
	error: "",
};

const pendingUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PENDING_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_PENDING_USERS_SUCCESS:
			return {
				loading: false,
				pendingUsersList: action.payload,
				error: "",
			};
		case FETCH_PENDING_USERS_FAILURE:
			return {
				loading: false,
				pendingUsersList: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default pendingUsersReducer;
