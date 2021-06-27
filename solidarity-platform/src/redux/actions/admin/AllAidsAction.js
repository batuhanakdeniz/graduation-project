import {
	FETCH_ALL_AIDS_REQUEST,
	FETCH_ALL_AIDS_SUCCESS,
	FETCH_ALL_AIDS_FAILURE,
} from "../../types/admin/AllAidsTypes";
import axios from "axios";

export const fetchAllAidsRequest = () => {
	return {
		type: FETCH_ALL_AIDS_REQUEST,
	};
};
export const fetchAllAidsSuccess = (allAids) => {
	return {
		type: FETCH_ALL_AIDS_SUCCESS,
		payload: allAids,
	};
};
export const fetchAllAidsFailure = (error) => {
	return {
		type: FETCH_ALL_AIDS_FAILURE,
		payload: error,
	};
};

export const fetchAllAids = (aidId) => {
	return (dispatch) => {
		dispatch(fetchAllAidsRequest);
		axios
			.get(`http://localhost:5000/map/api/helps/details`)
			.then((response) => {
				const allAids = response.data;
				dispatch(fetchAllAidsSuccess(allAids));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchAllAidsFailure(errorMsg));
			});
	};
};
export const deleteAidByAidID = (aidID) => {
	return async (dispatch) => {
		try {
			const response = await axios.delete(
				`http://localhost:5000/map/api/helps/details/delete/${aidID}`
			);
			return response;
		} catch (error) {
			return error;
		}
	};
};
