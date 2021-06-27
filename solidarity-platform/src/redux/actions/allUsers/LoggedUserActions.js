import {
	FETCH_LOGGED_USER_DATA_REQUEST,
	FETCH_LOGGED_USER_DATA_SUCCESS,
	FETCH_LOGGED_USER_DATA_FAILURE,
} from "../../types/allUsers/LoggedUserTypes";

import axios from "axios";

export const fetchLoggedUserDataRequest = () => {
	return {
		type: FETCH_LOGGED_USER_DATA_REQUEST,
	};
};
export const fetchLoggedUserDataSuccess = (loggedUserData) => {
	return {
		type: FETCH_LOGGED_USER_DATA_SUCCESS,
		payload: loggedUserData,
	};
};
export const fetchLoggedUserDataFailure = (error) => {
	return {
		type: FETCH_LOGGED_USER_DATA_FAILURE,
		payload: error,
	};
};

export const getLoggedUserData = () => {
	return (dispatch) => {
		dispatch(fetchLoggedUserDataRequest);
		axios
			.get("http://localhost:5000/api/loggedUser")
			.then((response) => {
				const loggedUserData = response.data;
				dispatch(fetchLoggedUserDataSuccess(loggedUserData));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchLoggedUserDataFailure(errorMsg));
			});
	};
};
