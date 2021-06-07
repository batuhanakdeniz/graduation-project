import {
	FETCH_ALL_AIDS_REQUEST,
	FETCH_ALL_AIDS_SUCCESS,
	FETCH_ALL_AIDS_FAILURE,
} from "../../types/admin/AllAidsTypes";

const initialState = {
	loading: false,
	allAidsList: [],
	error: "",
};

const allAidsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_AIDS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_ALL_AIDS_SUCCESS:
			return {
				loading: false,
				allAidsList: action.payload,
				error: "",
			};
		case FETCH_ALL_AIDS_FAILURE:
			return {
				loading: false,
				allAidsList: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default allAidsReducer;
