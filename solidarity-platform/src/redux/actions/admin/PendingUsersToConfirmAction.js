import {
	FETCH_PENDING_USERS_REQUEST,
	FETCH_PENDING_USERS_SUCCESS,
	FETCH_PENDING_USERS_FAILURE,
} from "../../types/admin/PendingUsersToConfirmTypes";
import axios from "axios";

export const fetchPendingUsersRequest = () => {
	return {
		type: FETCH_PENDING_USERS_REQUEST,
	};
};
export const fetchPendingUsersSuccess = (pendingUsers) => {
	return {
		type: FETCH_PENDING_USERS_SUCCESS,
		payload: pendingUsers,
	};
};
export const fetchPendingUsersFailure = (error) => {
	return {
		type: FETCH_PENDING_USERS_FAILURE,
		payload: error,
	};
};

export const fetchPendingUsers = () => {
	return (dispatch) => {
		dispatch(fetchPendingUsersRequest);
		axios
			.get(`http://localhost:5000/api/admin/users/pending`)
			.then((response) => {
				const pendingUsers = response.data;
				console.log(pendingUsers);
				dispatch(fetchPendingUsersSuccess(pendingUsers));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchPendingUsersFailure(errorMsg));
			});
	};
};
