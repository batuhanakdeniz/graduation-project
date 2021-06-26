import {
	FETCH_NUMBER_OF_AIDS_REQUEST,
	FETCH_NUMBER_OF_AIDS_SUCCESS,
	FETCH_NUMBER_OF_AIDS_FAILURE,
} from "../../types/aboutpage/numberOfAidsTypes";

import axios from "axios";

export const fetchNumberOfAidsRequest = () => {
	return {
		type: FETCH_NUMBER_OF_AIDS_REQUEST,
	};
};
export const fetchNumberOfAidsSuccess = (number) => {
	return {
		type: FETCH_NUMBER_OF_AIDS_SUCCESS,
		payload: number,
	};
};
export const fetchNumberOfAidsFailure = (error) => {
	return {
		type: FETCH_NUMBER_OF_AIDS_FAILURE,
		payload: error,
	};
};

export const fetchNumberOfAids = () => {
	return (dispatch) => {
		dispatch(fetchNumberOfAidsRequest);

		axios
			.get(`http://localhost:5000/home/api/help/number`)
			.then((response) => {
				const number = response.data;
				dispatch(fetchNumberOfAidsSuccess(number));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchNumberOfAidsFailure(errorMsg));
			});
	};
};
