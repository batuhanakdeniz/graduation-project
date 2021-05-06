import {
	FETCH_NUMBER_OF_HELPED_AIDS_REQUEST,
	FETCH_NUMBER_OF_HELPED_AIDS_SUCCESS,
	FETCH_NUMBER_OF_HELPED_AIDS_FAILURE,
} from "../../types/homepage/numberOfHelpedAidsTypes";

import axios from "axios";

export const fetchNumberOfHelpedAidsRequest = () => {
	return {
		type: FETCH_NUMBER_OF_HELPED_AIDS_REQUEST,
	};
};
export const fetchNumberOfHelpedAidsSuccess = (number) => {
	return {
		type: FETCH_NUMBER_OF_HELPED_AIDS_SUCCESS,
		payload: number,
	};
};
export const fetchNumberOfHelpedAidsFailure = (error) => {
	return {
		type: FETCH_NUMBER_OF_HELPED_AIDS_FAILURE,
		payload: error,
	};
};

export const fetchNumberOfHelpedAids = () => {
	return (dispatch) => {
		dispatch(fetchNumberOfHelpedAidsRequest);
		axios
			.get(`http://localhost:5000/map/api/helps/details`)
			.then((response) => {
				const number = response.data;
				dispatch(fetchNumberOfHelpedAidsSuccess(number));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchNumberOfHelpedAidsFailure(errorMsg));
			});
	};
};
