import {
	FETCH_LOGGED_USERS_PENDING_AIDS_REQUEST,
	FETCH_LOGGED_USERS_PENDING_AIDS_SUCCESS,
	FETCH_LOGGED_USERS_PENDING_AIDS_FAILURE,
	FETCH_LOGGED_USERS_ACTIVE_AIDS_REQUEST,
	FETCH_LOGGED_USERS_ACTIVE_AIDS_SUCCESS,
	FETCH_LOGGED_USERS_ACTIVE_AIDS_FAILURE,
} from "../../types/allUsers/LoggedUsersAidsTypes";
import axios from "axios";

export const fetchLoggedUsersPendingAidsRequest = () => {
	return {
		type: FETCH_LOGGED_USERS_PENDING_AIDS_REQUEST,
	};
};
export const fetchLoggedUsersPendingAidsSuccess = (pendingAids) => {
	return {
		type: FETCH_LOGGED_USERS_PENDING_AIDS_SUCCESS,
		payload: pendingAids,
	};
};
export const fetchLoggedUsersPendingAidsFailure = (error) => {
	return {
		type: FETCH_LOGGED_USERS_PENDING_AIDS_FAILURE,
		payload: error,
	};
};

export const fetchLoggedUsersPendingAids = () => {
	return (dispatch) => {
		dispatch(fetchLoggedUsersPendingAidsRequest);
		axios
			.get(`http://localhost:5000/map/api/helps/details`)
			.then((response) => {
				const pendingAids = response.data;
				dispatch(fetchLoggedUsersPendingAidsSuccess(pendingAids));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchLoggedUsersPendingAidsFailure(errorMsg));
			});
	};
};

/****************************** */
export const fetchLoggedUsersActiveAidsRequest = () => {
	return {
		type: FETCH_LOGGED_USERS_ACTIVE_AIDS_REQUEST,
	};
};
export const fetchLoggedUsersActiveAidsSuccess = (activeAids) => {
	return {
		type: FETCH_LOGGED_USERS_ACTIVE_AIDS_SUCCESS,
		payload: activeAids,
	};
};
export const fetchLoggedUsersActiveAidsFailure = (error) => {
	return {
		type: FETCH_LOGGED_USERS_ACTIVE_AIDS_FAILURE,
		payload: error,
	};
};

export const fetchLoggedUsersActiveAids = () => {
	return (dispatch) => {
		dispatch(fetchLoggedUsersActiveAidsRequest);
		axios
			.get(`http://localhost:5000/map/api/helps/details`)
			.then((response) => {
				const activeAids = response.data;
				console.log(activeAids);
				dispatch(fetchLoggedUsersActiveAidsSuccess(activeAids));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchLoggedUsersActiveAidsFailure(errorMsg));
			});
	};
};
