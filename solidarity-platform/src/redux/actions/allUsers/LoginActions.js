import {
	FETCH_LOGIN_REQUEST,
	FETCH_LOGIN_SUCCESS,
	FETCH_LOGIN_FAILURE,
} from "../../types/allUsers/LoginTypes";
import axios from "axios";
export const fetchLoggedInRequest = () => {
	return {
		type: FETCH_LOGIN_REQUEST,
	};
};
export const fetchLoggedInSuccess = (loggedIn) => {
	return {
		type: FETCH_LOGIN_SUCCESS,
		payload: loggedIn,
	};
};
export const fetchLoggedInFailure = (error) => {
	return {
		type: FETCH_LOGIN_FAILURE,
		payload: error,
	};
};

export const getLoggedIn = () => {
	return (dispatch) => {
		dispatch(fetchLoggedInRequest);
		axios
			.get("http://localhost:5000/api/loggedIn")
			.then((response) => {
				const loggedIn = response.data;
				dispatch(fetchLoggedInSuccess(loggedIn));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchLoggedInFailure(errorMsg));
			});
	};
};
