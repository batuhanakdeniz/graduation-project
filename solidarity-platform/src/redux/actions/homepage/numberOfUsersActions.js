import {
	FETCH_NUMBER_OF_USERS_REQUEST,
	FETCH_NUMBER_OF_USERS_SUCCESS,
	FETCH_NUMBER_OF_USERS_FAILURE,
} from "../../types/homepage/numberOfUsersTypes";

import axios from "axios";

export const fetchNumberOfUsersRequest = () => {
	return {
		type: FETCH_NUMBER_OF_USERS_REQUEST,
	};
};
export const fetchNumberOfUsersSuccess = (number) => {
	return {
		type: FETCH_NUMBER_OF_USERS_SUCCESS,
		payload: number,
	};
};
export const fetchNumberOfUsersFailure = (error) => {
	return {
		type: FETCH_NUMBER_OF_USERS_FAILURE,
		payload: error,
	};
};

export const fetchNumberOfUsers = () => {
	return (dispatch) => {
		dispatch(fetchNumberOfUsersRequest);
		axios
			.get(`http://localhost:5000/home/api/user/number`)
			.then((response) => {
				const number = response.data;
				dispatch(fetchNumberOfUsersSuccess(number));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchNumberOfUsersFailure(errorMsg));
			});
	};
};
