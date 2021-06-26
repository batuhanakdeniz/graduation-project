import {
	FETCH_NUMBER_OF_AIDS_REQUEST,
	FETCH_NUMBER_OF_AIDS_SUCCESS,
	FETCH_NUMBER_OF_AIDS_FAILURE,
} from "../../types/aboutpage/numberOfAidsTypes";

const initialState = {
	loading: false,
	numberOfAids: 0,
	error: "",
};

const numberOfAidsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_NUMBER_OF_AIDS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_NUMBER_OF_AIDS_SUCCESS:
			return {
				...state,
				loading: false,
				numberOfAids: action.payload,
				error: "",
			};
		case FETCH_NUMBER_OF_AIDS_FAILURE:
			return {
				...state,
				loading: false,
				numberOfAids: 0,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default numberOfAidsReducer;
