import {
	FETCH_PENDING_AIDS_REQUEST,
	FETCH_PENDING_AIDS_SUCCESS,
	FETCH_PENDING_AIDS_FAILURE,
} from "../../types/admin/PendingAidsTypes";
import axios from "axios";

export const fetchPendingAidsRequest = () => {
	return {
		type: FETCH_PENDING_AIDS_REQUEST,
	};
};
export const fetchPendingAidsSuccess = (pendingAids) => {
	return {
		type: FETCH_PENDING_AIDS_SUCCESS,
		payload: pendingAids,
	};
};
export const fetchPendingAidsFailure = (error) => {
	return {
		type: FETCH_PENDING_AIDS_FAILURE,
		payload: error,
	};
};

export const fetchPendingAids = () => {
	return (dispatch) => {
		dispatch(fetchPendingAidsRequest);
		axios
			.get(`http://localhost:5000/map/api/helps/details/pendings`)
			.then((response) => {
				const pendingAids = response.data;
				dispatch(fetchPendingAidsSuccess(pendingAids));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchPendingAidsFailure(errorMsg));
			});
	};
};

export const confirmPendingAidByID = (aidID) => {
	return async (dispatch) => {
		try {
			const response = await axios.put(
				`http://localhost:5000/map/api/helps/subcategory/${aidID}`
			);
			return response;
		} catch (error) {
			return error;
		}
	};
};
export const deletePendingAidByID = (aidID) => {
	return async (dispatch) => {
		try {
			const response = await axios.delete(
				`http://localhost:5000/map/api/helps/subcategory/${aidID}`
			);
			return response;
		} catch (error) {
			return error;
		}
	};
};
