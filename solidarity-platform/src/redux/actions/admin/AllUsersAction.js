import {
	FETCH_ALL_USERS_REQUEST,
	FETCH_ALL_USERS_SUCCESS,
	FETCH_ALL_USERS_FAILURE,
} from "../../types/admin/AllUsersTypes";
import axios from "axios";

export const fetchAllUsersRequest = () => {
	return {
		type: FETCH_ALL_USERS_REQUEST,
	};
};
export const fetchAllUsersSuccess = (allUsers) => {
	return {
		type: FETCH_ALL_USERS_SUCCESS,
		payload: allUsers,
	};
};
export const fetchAllUsersFailure = (error) => {
	return {
		type: FETCH_ALL_USERS_FAILURE,
		payload: error,
	};
};

export const fetchAllUsers = () => {
	return (dispatch) => {
		dispatch(fetchAllUsersRequest);
		axios
			.get(`http://localhost:5000/api/admin/users`)
			.then((response) => {
				const allUsers = response.data;
				dispatch(fetchAllUsersSuccess(allUsers));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchAllUsersFailure(errorMsg));
			});
	};
};
export const deleteUserByUsername = (username) => {
	return async (dispatch) => {
		try {
			const response = await axios.delete(
				`http://localhost:5000/map/api/helps/subcategory/${username}`
			);
			return response;
		} catch (error) {
			return error;
		}
	};
};
