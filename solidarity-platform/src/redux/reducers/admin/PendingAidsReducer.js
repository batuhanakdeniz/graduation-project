import {
	FETCH_PENDING_AIDS_REQUEST,
	FETCH_PENDING_AIDS_SUCCESS,
	FETCH_PENDING_AIDS_FAILURE,
} from "../../types/admin/PendingAidsTypes";

const initialState = {
	loading: false,
	pendingAidsList: [],
	error: "",
};

const pendingAidsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PENDING_AIDS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_PENDING_AIDS_SUCCESS:
			return {
				loading: false,
				pendingAidsList: action.payload,
				error: "",
			};
		case FETCH_PENDING_AIDS_FAILURE:
			return {
				loading: false,
				pendingAidsList: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default pendingAidsReducer;
