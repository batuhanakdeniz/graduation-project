import {
	FETCH_NUMBER_OF_HELPED_AIDS_REQUEST,
	FETCH_NUMBER_OF_HELPED_AIDS_SUCCESS,
	FETCH_NUMBER_OF_HELPED_AIDS_FAILURE,
} from "../../types/aboutpage/numberOfHelpedAidsTypes";

const initialState = {
	loading: false,
	numberOfHelpedAids: 0,
	error: "",
};

const numberOfHelpedAidsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_NUMBER_OF_HELPED_AIDS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_NUMBER_OF_HELPED_AIDS_SUCCESS:
			return {
				...state,
				loading: false,
				numberOfHelpedAids: action.payload,
				error: "",
			};
		case FETCH_NUMBER_OF_HELPED_AIDS_FAILURE:
			return {
				...state,
				loading: false,
				numberOfHelpedAids: 0,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default numberOfHelpedAidsReducer;
