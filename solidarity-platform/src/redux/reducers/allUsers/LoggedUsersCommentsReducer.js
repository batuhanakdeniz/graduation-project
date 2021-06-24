import {
	FETCH_LOGGED_USERS_PENDING_COMMENTS_REQUEST,
	FETCH_LOGGED_USERS_PENDING_COMMENTS_SUCCESS,
	FETCH_LOGGED_USERS_PENDING_COMMENTS_FAILURE,
	FETCH_LOGGED_USERS_ACTIVE_COMMENTS_REQUEST,
	FETCH_LOGGED_USERS_ACTIVE_COMMENTS_SUCCESS,
	FETCH_LOGGED_USERS_ACTIVE_COMMENTS_FAILURE,
} from "../../types/allUsers/LoggedUsersCommentsTypes";

const initialState = {
	loading: false,
	pendingCommentsList: [],
	activeCommentsList: [],
	error: "",
};

const loggedUsersCommentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_LOGGED_USERS_PENDING_COMMENTS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_LOGGED_USERS_PENDING_COMMENTS_SUCCESS:
			return {
				loading: false,
				pendingCommentsList: action.payload,
				activeCommentsList: [],
				error: "",
			};
		case FETCH_LOGGED_USERS_PENDING_COMMENTS_FAILURE:
			return {
				loading: false,
				pendingCommentsList: [],
				activeCommentsList: [],
				error: action.payload,
			};
		case FETCH_LOGGED_USERS_ACTIVE_COMMENTS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_LOGGED_USERS_ACTIVE_COMMENTS_SUCCESS:
			return {
				loading: false,
				pendinCommentdsList: [],
				activeCommentsList: action.payload,
				error: "",
			};
		case FETCH_LOGGED_USERS_ACTIVE_COMMENTS_FAILURE:
			return {
				loading: false,
				pendingCommentsList: [],
				activeCommentsList: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default loggedUsersCommentsReducer;
