import {
	FETCH_MAP_SEARCH_AID_REQUEST,
	FETCH_MAP_SEARCH_AID_SUCCESS,
	FETCH_MAP_SEARCH_AID_FAILURE,
} from "../../types/aids/MapSearchAidTypes";

const initialState = {
	loading: false,
	searchedAidsList: [],
	error: "",
};

const mapSearchAidReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MAP_SEARCH_AID_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_MAP_SEARCH_AID_SUCCESS:
			return {
				...state,
				loading: false,
				searchedAidsList: action.payload,
				error: "",
			};
		case FETCH_MAP_SEARCH_AID_FAILURE:
			return {
				...state,
				loading: false,
				searchedAidsList: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default mapSearchAidReducer;
