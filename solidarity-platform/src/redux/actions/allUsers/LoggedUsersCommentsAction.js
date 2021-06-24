import {
	FETCH_LOGGED_USERS_PENDING_COMMENTS_REQUEST,
	FETCH_LOGGED_USERS_PENDING_COMMENTS_SUCCESS,
	FETCH_LOGGED_USERS_PENDING_COMMENTS_FAILURE,
	FETCH_LOGGED_USERS_ACTIVE_COMMENTS_REQUEST,
	FETCH_LOGGED_USERS_ACTIVE_COMMENTS_SUCCESS,
	FETCH_LOGGED_USERS_ACTIVE_COMMENTS_FAILURE,
} from "../../types/allUsers/LoggedUsersCommentsTypes";
import axios from "axios";

export const fetchLoggedUsersPendingCommentsRequest = () => {
	return {
		type: FETCH_LOGGED_USERS_PENDING_COMMENTS_REQUEST,
	};
};
export const fetchLoggedUsersPendingCommentsSuccess = (pendingComments) => {
	return {
		type: FETCH_LOGGED_USERS_PENDING_COMMENTS_SUCCESS,
		payload: pendingComments,
	};
};
export const fetchLoggedUsersPendingCommentsFailure = (error) => {
	return {
		type: FETCH_LOGGED_USERS_PENDING_COMMENTS_FAILURE,
		payload: error,
	};
};

export const fetchLoggedUsersPendingComments = () => {
	return (dispatch) => {
		dispatch(fetchLoggedUsersPendingCommentsRequest);
		axios
			.get(`http://localhost:5000/map/api/helps/details`)
			.then((response) => {
				const pendingComments = response.data;
				console.log(pendingComments);
				dispatch(fetchLoggedUsersPendingCommentsSuccess(pendingComments));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchLoggedUsersPendingCommentsFailure(errorMsg));
			});
	};
};

/****************************** */
export const fetchLoggedUsersActiveCommentsRequest = () => {
	return {
		type: FETCH_LOGGED_USERS_ACTIVE_COMMENTS_REQUEST,
	};
};
export const fetchLoggedUsersActiveCommentsSuccess = (activeComments) => {
	return {
		type: FETCH_LOGGED_USERS_ACTIVE_COMMENTS_SUCCESS,
		payload: activeComments,
	};
};
export const fetchLoggedUsersActiveCommentsFailure = (error) => {
	return {
		type: FETCH_LOGGED_USERS_ACTIVE_COMMENTS_FAILURE,
		payload: error,
	};
};

export const fetchLoggedUsersActiveComments = () => {
	return (dispatch) => {
		dispatch(fetchLoggedUsersActiveCommentsRequest);
		axios
			.get(`http://localhost:5000/map/api/helps/details`)
			.then((response) => {
				const activeComments = response.data;
				console.log(activeComments);
				dispatch(fetchLoggedUsersActiveCommentsSuccess(activeComments));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchLoggedUsersActiveCommentsFailure(errorMsg));
			});
	};
};
