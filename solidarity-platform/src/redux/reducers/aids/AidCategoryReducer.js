import {
	FETCH_AID_CATEGORY_REQUEST,
	FETCH_AID_CATEGORY_SUCCESS,
	FETCH_AID_CATEGORY_FAILURE,
} from "../../types/aids/AidCategoryTypes";
const initialState = {
	loading: false,
	categoryList: [],
	error: "",
};

const aidCategoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_AID_CATEGORY_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_AID_CATEGORY_SUCCESS:
			return {
				...state,
				loading: false,
				categoryList: action.payload,
				error: "",
			};
		case FETCH_AID_CATEGORY_FAILURE:
			return {
				...state,
				loading: false,
				categoryList: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default aidCategoryReducer;
