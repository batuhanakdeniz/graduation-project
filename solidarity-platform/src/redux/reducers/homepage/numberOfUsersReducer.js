import {
	FETCH_NUMBER_OF_USERS_REQUEST,
	FETCH_NUMBER_OF_USERS_SUCCESS,
	FETCH_NUMBER_OF_USERS_FAILURE,
} from "../../types/homepage/numberOfUsersTypes";

const initialState = {
	loading: false,
	numberOfUsers: 0,
	error: "",
};

const numberOfUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_NUMBER_OF_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_NUMBER_OF_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				numberOfUsers: action.payload,
				error: "",
			};
		case FETCH_NUMBER_OF_USERS_FAILURE:
			return {
				...state,
				loading: false,
				numberOfUsers: 0,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default numberOfUsersReducer;
