import {
	FETCH_PENDING_COMMENTS_REQUEST,
	FETCH_PENDING_COMMENTS_SUCCESS,
	FETCH_PENDING_COMMENTS_FAILURE,
} from "../../types/admin/PendingCommentsTypes";

const initialState = {
	loading: false,
	pendingCommentsList: [],
	error: "",
};

const pendingCommentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PENDING_COMMENTS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_PENDING_COMMENTS_SUCCESS:
			return {
				loading: false,
				pendingCommentsList: action.payload,
				error: "",
			};
		case FETCH_PENDING_COMMENTS_FAILURE:
			return {
				loading: false,
				pendingCommentsList: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default pendingCommentsReducer;
